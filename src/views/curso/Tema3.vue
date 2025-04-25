<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Factores de riesgo psicosocial'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 Para Agudelo, Calderón y Cano (2017), los factores de riesgo psicosocial, según Krauskopf (2003), son situaciones individuales o sociales que aumentan la probabilidad de desarrollar problemas conductuales, emocionales o de salud. Estos riesgos pueden presentarse en diversos contextos y afectar el bienestar general.
          .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-49.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Según De la Rosa, Meza y Vázquez (1988), citados por los mismos autores, estos factores incluyen elementos familiares, personales o sociales como el abandono parental, el maltrato o la falta de atención de los padres, los cuales pueden derivar en bajo rendimiento académico, abandono escolar o actitudes negativas, tanto en víctimas como en quienes reproducen dichas conductas.

      h2 El acompañamiento psicosocial

      .row.mb-4.mx-0
        .col-12.col-xl-8.d-flex.align-items-center.bg-rosa.p-4(data-aos="fade-up")
          p.mb-0 El <b>ICBF (2021)</b> define el acompañamiento psicosocial como un proceso dirigido al niño o adolescente, y a su red familiar o vincular, con el fin de superar situaciones que hayan vulnerado sus derechos. A diferencia de la atención clínica, este enfoque busca resignificar las experiencias desde lo emocional y social, fortaleciendo vínculos y capacidades.
        .d-none.d-xl-block.col-4.px-0
          img.h-100(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')

      h2 Enfermedades crónicas y su impacto emocional
      p.mb-4 La <b>Fundación Más Vida (s/f)</b> advierte que, desde edades tempranas, los niños enfrentan situaciones difíciles como conflictos familiares o escolares. En casos de enfermedades crónicas, como afecciones inflamatorias intestinales, estas dificultades pueden intensificarse, generando emociones como <b>miedo, tristeza o ansiedad</b>.

      .row.mb-4.bg-morado.bg-full-width
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex
          .my-auto
            p.mb-4 Sentirse “diferente” es una respuesta común. Aunque muchos niños se adaptan con el tiempo, es fundamental estar atentos a señales de malestar como:
            p.mb-4 ●	Problemas para dormir<br><br>●	Falta de apetito<br><br>●	Tristeza persistente o llanto frecuente<br><br>●	Desinterés por actividades habituales
            span En estos casos, el acompañamiento afectivo y la <b>comunicación abierta</b> con adultos de confianza es esencial. Validar sus emociones, reforzar que pueden tener una vida activa con tratamiento adecuado y brindar seguridad para expresar lo que sienten, son acciones fundamentales.

      h2 El rol de los adultos
      .row.mb-4
        .col-12.col-xl-9
          p.mb-4 <b>Padres y educadores</b> tienen un papel clave en la <b>prevención de trastornos emocionales</b>. Su intervención oportuna puede reducir el impacto del estrés, fortalecer los recursos internos del niño y fomentar hábitos saludables.
          span.text-bold Para lograr una comunicación efectiva:
        .col-3.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-10.col-lg-5.col-xl-3.mx-auto.mb-4(data-aos='zoom-in')
          .d-flex.align-items-start.bg-verde.p-3.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 75px' src='@/assets/curso/unidad/img-53.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-2.text-bold Primero
              span.text-small Escuchar sin juzgar
        .col-10.col-lg-5.col-xl-3.mx-auto.mb-4(data-aos='zoom-in')
          .d-flex.align-items-start.bg-verde.p-3.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 75px' src='@/assets/curso/unidad/img-54.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-2.text-bold Segundo
              span.text-small Mostrar apertura y disponibilidad
        .col-10.col-lg-5.col-xl-3.mx-auto.mb-4(data-aos='zoom-in')
          .d-flex.align-items-start.bg-verde.p-3.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 75px' src='@/assets/curso/unidad/img-55.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-2.text-bold Tercero
              span.text-small Compartir experiencias y estrategias de afrontamiento
        .col-10.col-lg-5.col-xl-3.mx-auto.mb-4(data-aos='zoom-in')
          .d-flex.align-items-start.bg-verde.p-3.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 75px' src='@/assets/curso/unidad/img-56.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-2.text-bold Cuarto
              span.text-small Servir de ejemplo en la resolución de problemas

      p.mb-4 Incluso situaciones cotidianas —como el nacimiento de un hermano o el inicio escolar— pueden generar ansiedad. Hablar sobre estos cambios, involucrar al niño en soluciones y reconocer sus logros fortalece la <b>autonomía y la autoestima</b>.

      h2 Afecto, confianza y bienestar

      .row.bg-fondo-2.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
          .row.mb-4
            .col-12.col-xl-8
              .bg-morado.p-4.mb-4(data-aos='fade-up')
                span El <b>afecto incondicional</b>, la aceptación y la <b>corrección constructiva</b> son pilares para el desarrollo emocional. Evitar la sobreprotección y promover que los niños enfrenten sus propios desafíos con apoyo fortalece su autoestima.
              span Asimismo, los adultos deben cuidar su propio equilibrio emocional. Participar en actividades sociales, mantener rutinas saludables y compartir tiempo de calidad favorece el bienestar común. Estas experiencias enseñan a los niños a enfrentar la vida con resiliencia y confianza.
            .col-4.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-57.png', alt='Texto que describa la imagen')

            .col-10.col-xl-6.mx-auto.mt-4
              .tarjeta.shadow.p-3.mb-5.bg-white
                .row.justify-content-around.align-items-center
                  .d-none.d-lg-block.col-lg-2
                    img(src='@/assets/componentes/link-icon-circle.svg')
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        p.text-bold.mb-3 Recuperación psicoafectiva: una infancia resiliente 
                        p.text-small En este punto, les compartimos el siguiente texto:
                      .col-sm-auto
                        a.download-btn.boton.bg-morado-oscuro.text-primary-2.text-white(href="https://elibro.net/es/ereader/tecnologicadeloriente/113363?page=1" target='_blank')
                          span.text-small Ir al sitio
                          i.fas.fa-arrow-right

      h2 Conformación del núcleo familiar

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-58.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          .bg-amarillo.p-4.mb-4(data-aos='fade-up')
            span Según <b>Robledo García y Nicasio (2008)</b>, la estructura y dinámica del núcleo familiar influyen de forma significativa en el desarrollo psicosocial de sus miembros. La familia actúa como el primer agente socializador, siendo el vínculo inicial entre el individuo y la sociedad. A través de este proceso, se transmiten valores, normas y herramientas para la adaptación social.
          span Algunas configuraciones familiares pueden implicar desafíos adicionales:
      
      TabsC.mb-4
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Familias disfuncionales', :icon="require('@/assets/curso/unidad/img-59.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-60.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Familias disfuncionales
              p(data-aos='fade-up') Se caracterizan por falta de comunicación, conflictos constantes y ausencia de apoyo emocional. Estas condiciones generan altos niveles de estrés y problemas de salud mental en los integrantes.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Cambios en la estructura familiar', :icon="require('@/assets/curso/unidad/img-59.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-61.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Cambios en la estructura familiar
              p(data-aos='fade-up') Situaciones como el divorcio, la separación o la pérdida de un miembro alteran la estabilidad emocional, especialmente en los niños.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Familias monoparentales o reconstituidas', :icon="require('@/assets/curso/unidad/img-59.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-62.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Familias monoparentales o reconstituidas
              p(data-aos='fade-up') Aunque pueden ser funcionales, suelen enfrentarse a mayores dificultades, como la sobrecarga del cuidador principal o la falta de recursos emocionales y materiales.

      h2 Estilos educativos parentales

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-63.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 Los estilos educativos parentales son fundamentales en la socialización. Se definen como el conjunto de actitudes, creencias y estrategias que los padres aplican en la crianza, moldeando el desarrollo emocional y social del niño. La forma en que se combinan la <b>exigencia</b> (control, disciplina) con el <b>afecto</b> (apoyo, calidez emocional) tiene un impacto directo en su bienestar.
          .bg-verde.p-4.mb-4(data-aos='fade-up')
            span Los modelos más conocidos para clasificar los estilos educativos son los de <b>Diana Baumrind</b> y el <b>modelo cuatripartito de Maccoby y Martín</b>, los cuales describen los tipos de crianza según estas dos dimensiones clave: <b>control y respuesta emocional</b>.
          span Ambos modelos coinciden en la existencia de cuatro estilos principales:
      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Estilo autoritario
                p Se caracteriza por altos niveles de exigencia y bajo afecto. Los padres autoritarios imponen normas estrictas y esperan obediencia sin cuestionamientos. <br><br><b>Impacto en los niños:</b> Puede generar inseguridad, baja autoestima y dificultades en la toma de decisiones. En contextos muy estructurados, puede estar asociado a un alto rendimiento académico.

              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-64.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Estilo permisivo
                p Presenta altos niveles de afecto y baja exigencia. Los padres suelen ser indulgentes, evitan imponer normas rígidas y permiten amplia libertad. <br><br><b>Impacto en los niños</b>: Puede fomentar impulsividad, falta de autocontrol y dificultades para respetar límites.

              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-65.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Estilo autoritativo (democrático)
                p Combina exigencia y afecto de manera equilibrada. Los padres establecen normas claras pero flexibles, promoviendo la comunicación y el respeto mutuo. <br><br><b>Impacto en los niños</b>: Favorece la independencia, autoestima sólida y habilidades sociales fuertes. Es considerado el estilo más beneficioso para el desarrollo infantil.

              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-66.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Estilo negligente (desentendido)
                p Se manifiesta con bajos niveles tanto de afecto como de exigencia. Los padres suelen estar emocionalmente distantes o desinteresados en las necesidades de sus hijos. <br><br><b>Impacto en los niños</b>: Genera sentimientos de abandono, inseguridad emocional y dificultades para socializar.

              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-67.png', alt='Texto que describa la imagen')

      p.mb-4 El modelo de <b>Maccoby y Martín</b> amplía la propuesta de Baumrind, reforzando la importancia de las dos dimensiones básicas de la crianza:

      .row.mb-4
        .col-10.col-lg-6.mx-auto.mb-4
          .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-68.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-3.text-bold Control o exigencia
              span Capacidad de establecer normas, límites y expectativas claras.
        .col-10.col-lg-6.mx-auto.mb-4
          .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-69.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-3.text-bold Respuesta o afecto
              span Nivel de calidez emocional, contención y apoyo ofrecido al niño.

      p.mb-4 La combinación de estos factores determina los cuatro estilos previamente descritos y evidencia que el equilibrio entre control y afecto —propio del estilo autoritativo— es el más adecuado para favorecer el desarrollo emocional, social y cognitivo de los niños.

      h2 Importancia de los estilos parentales en el desarrollo infantil
      p.mb-4 Los estilos educativos repercuten directamente en aspectos clave del desarrollo:

      .row.mb-0.bg-morado.bg-full-width
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-70.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex
          .my-auto
            p.mb-0 ●	<b>Desarrollo emocional.</b> El estilo autoritativo favorece la regulación emocional y la empatía.<br><br>●	<b>Socialización.</b>. Un entorno afectivo y con límites claros facilita relaciones sanas con otros.<br><br>●	<b>Autonomía</b>. La combinación de apoyo y exigencia impulsa la toma de decisiones y la resolución de problemas.<br><br>●	<b>Rendimiento académico</b>. Las altas expectativas junto con el respaldo emocional aumentan el compromiso y la motivación escolar.

      .row.bg-verde.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Entornos protectores y bienestar integral en la infancia: acompañamiento familiar, social y emocional
            p.mb-5(data-aos="fade-up") Se invita a leer el documento Entornos protectores y bienestar integral en la infancia, donde se aborda el papel fundamental de la familia, la comunidad, los pares y las instituciones educativas en la promoción del bienestar psicosocial y emocional de niños, niñas y adolescentes.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Entornos protectores y bienestar integral en la infancia: acompañamiento familiar, social y emocional
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-71.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top.actividad(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important').mb-5
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario='cuestionario'/>

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/113363?page=21") Russo de Sánchez, A. R. Bustos Arcón, V. Á. & Mass Torres, L. R. (2019). Recuperación psicoafectiva: una infancia resiliente.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/") E-Libro
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=WzEL-apOddM") [Vídeo] Fundación Santa Fe de Bogotá. (2022). #56 Salud mental en niños y adolescentes, con el Dr. Roberto Chaskel
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Factores que afectan el desarrollo infantil',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de los siguientes factores físicos puede afectar negativamente el desarrollo infantil?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Juego activo', esCorrecta: false },
            { id: 'b', texto: 'Alimentación balanceada', esCorrecta: false },
            { id: 'c', texto: 'Desnutrición', esCorrecta: true },
            { id: 'd', texto: 'Sueño reparador', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué evento prenatal puede aumentar el riesgo de afectaciones en el desarrollo cognitivo del niño?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Consumo de sustancias nocivas durante el embarazo',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Lactancia prolongada', esCorrecta: false },
            {
              id: 'c',
              texto: 'Interacción con otros niños desde temprana edad',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Control prenatal regular', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué elemento psicosocial tiene mayor impacto en el desarrollo emocional del niño?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de juguetes que posee',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La asistencia a actividades extracurriculares',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La salud mental y estabilidad del núcleo familiar',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La cantidad de horas frente a pantallas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué consecuencia puede derivarse de la deprivación cognitiva en la infancia?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor interés por aprender nuevos conceptos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Retraso en el desarrollo intelectual',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incremento de habilidades sociales',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ningún impacto significativo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes factores puede alterar el sueño infantil?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rutinas estables para ir a dormir',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Exceso de luz o ruido en el ambiente',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Actividades físicas matutinas',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cumplimiento de horarios regulares',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
