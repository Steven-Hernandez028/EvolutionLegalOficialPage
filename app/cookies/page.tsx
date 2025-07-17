import { Footer } from "@/components/footer"
import { NavbarAndTopBar } from "@/components/TopBarAndNavbar"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-secondary">
      <NavbarAndTopBar />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h1 className="text-3xl font-bold text-primary mb-8">Política de Cookies</h1>

            <div className="prose prose-lg max-w-none text-primary/80 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">¿Qué son las Cookies?</h2>
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro
                  sitio web. Nos ayudan a mejorar su experiencia de navegación y a proporcionar servicios más
                  personalizados.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">Tipos de Cookies que Utilizamos</h2>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-primary mb-2">Cookies Necesarias</h3>
                    <p>
                      Estas cookies son esenciales para el funcionamiento básico del sitio web. Sin ellas, algunas
                      funcionalidades no estarían disponibles.
                    </p>
                    <p className="text-sm text-primary/60 mt-2">
                      <strong>Ejemplos:</strong> Cookies de sesión, preferencias de idioma, configuración de
                      accesibilidad.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-primary mb-2">Cookies de Análisis</h3>
                    <p>
                      Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web, permitiéndonos
                      mejorar la experiencia del usuario.
                    </p>
                    <p className="text-sm text-primary/60 mt-2">
                      <strong>Ejemplos:</strong> Google Analytics, estadísticas de páginas visitadas, tiempo de
                      permanencia.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-primary mb-2">Cookies de Marketing</h3>
                    <p>
                      Se utilizan para mostrar anuncios relevantes y medir la efectividad de nuestras campañas
                      publicitarias.
                    </p>
                    <p className="text-sm text-primary/60 mt-2">
                      <strong>Ejemplos:</strong> Cookies de redes sociales, seguimiento de conversiones, remarketing.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-primary mb-2">Cookies Funcionales</h3>
                    <p>
                      Permiten funcionalidades adicionales como chat en vivo, formularios de contacto y personalización
                      de contenido.
                    </p>
                    <p className="text-sm text-primary/60 mt-2">
                      <strong>Ejemplos:</strong> Preferencias guardadas, configuración de usuario, widgets de terceros.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">Gestión de Cookies</h2>
                <p>Puede controlar y gestionar las cookies de varias maneras:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Configuración del sitio web:</strong> Utilice nuestro banner de cookies para seleccionar qué
                    tipos de cookies acepta.
                  </li>
                  <li>
                    <strong>Configuración del navegador:</strong> La mayoría de navegadores le permiten controlar las
                    cookies a través de su configuración.
                  </li>
                  <li>
                    <strong>Herramientas de terceros:</strong> Puede optar por no participar en el seguimiento de
                    terceros visitando sus sitios web respectivos.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">Cookies de Terceros</h2>
                <p>Nuestro sitio web puede contener cookies de terceros, incluyendo:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Google Analytics:</strong> Para análisis de tráfico web
                  </li>
                  <li>
                    <strong>Redes Sociales:</strong> Para integración con plataformas sociales
                  </li>
                  <li>
                    <strong>Servicios de Chat:</strong> Para soporte al cliente en tiempo real
                  </li>
                  <li>
                    <strong>Mapas:</strong> Para mostrar ubicaciones y direcciones
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">Configuración del Navegador</h2>
                <p>
                  Puede configurar su navegador para rechazar cookies o para que le notifique cuando se envíen cookies.
                  Los enlaces a continuación le ayudarán a configurar las cookies en los navegadores más populares:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <a href="#" className="text-accent hover:underline">
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-accent hover:underline">
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-accent hover:underline">
                      Safari
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-accent hover:underline">
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">Impacto de Deshabilitar Cookies</h2>
                <p>
                  Si decide deshabilitar las cookies, algunas funcionalidades de nuestro sitio web pueden no funcionar
                  correctamente:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Formularios de contacto pueden no funcionar</li>
                  <li>Preferencias de usuario no se guardarán</li>
                  <li>Algunas páginas pueden cargar más lentamente</li>
                  <li>Contenido personalizado no estará disponible</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">Actualizaciones de esta Política</h2>
                <p>
                  Podemos actualizar esta política de cookies ocasionalmente para reflejar cambios en nuestras prácticas
                  o por razones operativas, legales o reglamentarias.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">Contacto</h2>
                <p>Si tiene preguntas sobre nuestra política de cookies, puede contactarnos:</p>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p>
                    <strong>Email:</strong> cookies@legalstudio.com
                  </p>
                  <p>
                    <strong>Teléfono:</strong> +57 300 123 4567
                  </p>
                  <p>
                    <strong>Dirección:</strong> Calle 123 #45-67, Bogotá, Colombia
                  </p>
                </div>
              </section>

              <p className="text-sm text-primary/60 mt-8">
                <strong>Última actualización:</strong> {new Date().toLocaleDateString("es-ES")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
