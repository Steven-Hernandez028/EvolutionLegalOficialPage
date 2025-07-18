import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NavbarAndTopBar } from "@/components/TopBarAndNavbar"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-secondary">
      <NavbarAndTopBar />

      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h1 className="text-3xl font-bold text-primary mb-8">Política de Privacidad</h1>

            <div className="prose prose-lg max-w-none text-primary/80 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">1. Información que Recopilamos</h2>
                <p>
                  En LegalStudio, recopilamos información personal que usted nos proporciona voluntariamente cuando:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Solicita una consulta legal</li>
                  <li>Se comunica con nosotros por teléfono, email o formularios web</li>
                  <li>Se suscribe a nuestro boletín informativo</li>
                  <li>Utiliza nuestros servicios legales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">2. Uso de la Información</h2>
                <p>Utilizamos su información personal para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar servicios legales profesionales</li>
                  <li>Comunicarnos con usted sobre su caso</li>
                  <li>Enviar actualizaciones sobre cambios legales relevantes</li>
                  <li>Mejorar nuestros servicios</li>
                  <li>Cumplir con obligaciones legales y profesionales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">3. Protección de Datos</h2>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información
                  personal contra acceso no autorizado, alteración, divulgación o destrucción.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">4. Compartir Información</h2>
                <p>
                  No vendemos, intercambiamos o transferimos su información personal a terceros sin su consentimiento,
                  excepto cuando sea necesario para proporcionar nuestros servicios legales o cuando lo requiera la ley.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">5. Sus Derechos</h2>
                <p>Usted tiene derecho a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acceder a su información personal</li>
                  <li>Rectificar datos inexactos</li>
                  <li>Solicitar la eliminación de sus datos</li>
                  <li>Oponerse al procesamiento de sus datos</li>
                  <li>Portabilidad de datos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">6. Cookies</h2>
                <p>
                  Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Puede configurar su navegador
                  para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">7. Contacto</h2>
                <p>Si tiene preguntas sobre esta política de privacidad, puede contactarnos en:</p>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p>
                    <strong>Email:</strong> privacidad@legalstudio.com
                  </p>
                  <p>
                    <strong>Teléfono:</strong> +57 300 123 4567
                  </p>
                  <p>
                    <strong>Dirección:</strong> Calle 123 #45-67, Bogotá, Colombia
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">8. Cambios a esta Política</h2>
                <p>
                  Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios
                  serán publicados en esta página con la fecha de la última actualización.
                </p>
                <p className="text-sm text-primary/60 mt-4">
                  <strong>Última actualización:</strong> {new Date().toLocaleDateString("es-ES")}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
