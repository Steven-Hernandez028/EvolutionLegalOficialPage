import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />

      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h1 className="text-3xl font-bold text-primary mb-8">Términos y Condiciones</h1>

            <div className="prose prose-lg max-w-none text-primary/80 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">1. Aceptación de Términos</h2>
                <p>
                  Al acceder y utilizar los servicios de LegalStudio, usted acepta estar sujeto a estos términos y
                  condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros
                  servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">2. Servicios Legales</h2>
                <p>
                  LegalStudio proporciona servicios de asesoría y representación legal en diversas áreas del derecho.
                  Nuestros servicios incluyen pero no se limitan a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Derecho Civil</li>
                  <li>Derecho Penal</li>
                  <li>Derecho Corporativo</li>
                  <li>Derecho Familiar</li>
                  <li>Derecho Laboral</li>
                  <li>Mediación y resolución de conflictos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">3. Relación Abogado-Cliente</h2>
                <p>
                  La relación abogado-cliente se establece únicamente mediante un acuerdo escrito firmado por ambas
                  partes. La consulta inicial o el intercambio de información no constituye automáticamente una relación
                  abogado-cliente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">4. Confidencialidad</h2>
                <p>
                  Toda información compartida con LegalStudio está protegida por el secreto profesional y será tratada
                  con la máxima confidencialidad de acuerdo con las normas éticas y legales aplicables.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">5. Honorarios y Pagos</h2>
                <p>
                  Los honorarios por nuestros servicios serán acordados por escrito antes del inicio de cualquier
                  representación legal. Los pagos deben realizarse según los términos establecidos en el contrato de
                  servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">6. Limitación de Responsabilidad</h2>
                <p>
                  LegalStudio se compromete a proporcionar servicios legales competentes y diligentes. Sin embargo, no
                  garantizamos resultados específicos en ningún caso legal, ya que los resultados dependen de múltiples
                  factores fuera de nuestro control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">7. Uso del Sitio Web</h2>
                <p>
                  El contenido de este sitio web es solo para fines informativos y no constituye asesoramiento legal. No
                  debe actuar basándose únicamente en la información proporcionada sin consultar con un abogado.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">8. Propiedad Intelectual</h2>
                <p>
                  Todo el contenido de este sitio web, incluyendo textos, imágenes, logos y diseños, está protegido por
                  derechos de autor y otras leyes de propiedad intelectual.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">9. Modificaciones</h2>
                <p>
                  Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las
                  modificaciones entrarán en vigor inmediatamente después de su publicación en este sitio web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">10. Ley Aplicable</h2>
                <p>
                  Estos términos y condiciones se rigen por las leyes de Colombia. Cualquier disputa será resuelta en
                  los tribunales competentes de Bogotá, Colombia.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">11. Contacto</h2>
                <p>Para preguntas sobre estos términos y condiciones, puede contactarnos:</p>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p>
                    <strong>Email:</strong> legal@legalstudio.com
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
