import { BaseService } from "./base.service"
import type { Resource } from "@prisma/client"


export class ResourceService extends BaseService<Resource> {

    async getAllResources(): Promise<any> {
        const res  = await this.prisma.resource.findMany({
            where: {
                isActive: true
            }
        })
        const resources = res.map((value : Resource)=>{
             const resource = {
                id :value.id,
                title: value.title,
                description : value.description,
                type : value.type,
                downloadUrl  : value.downloadUrl
             }
             return resource
        })
       

        return resources;
    }

}

export const resourceService = new ResourceService()




