import prisma from "@/database/prisma"
import type { PrismaClient } from "@prisma/client"
import { PaginationOptions } from "./interfaces/pagination.options"


export interface PaginatedResult<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export abstract class BaseService<T> {
  protected prisma: PrismaClient

  constructor() {
    this.prisma = prisma
  }

  protected async paginate<T>(
    model: any,
    options: PaginationOptions,
    where?: any,
    include?: any,
  ): Promise<PaginatedResult<T>> {
    const { page = 1, limit = 10, sortBy = "createdAt", sortOrder = "desc" } = options
    const skip = (page - 1) * limit

    const [data, total] = await Promise.all([
      model.findMany({
        where,
        include,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
      }),
      model.count({ where }),
    ])

    return {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      data
    }
  }

  protected generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }
}
