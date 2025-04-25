<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Factores de riesgo del desarrollo cognitivo infantil'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 El desarrollo cognitivo de los niños no depende únicamente de sus características individuales o del entorno familiar. El ámbito escolar también desempeña un papel crucial, ya que es allí donde los niños pasan una parte considerable de su tiempo y donde se exponen a nuevos desafíos, aprendizajes, relaciones e influencias.
          .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-30.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 En este contexto, la calidad del entorno escolar puede convertirse tanto en un factor protector como en un factor de riesgo. Cuando la escuela ofrece un ambiente seguro, estimulante y afectivo, se favorece el desarrollo integral del niño, incluyendo sus capacidades cognitivas. Sin embargo, cuando existen deficiencias en la infraestructura, falta de recursos pedagógicos, o ausencia de acompañamiento institucional, pueden generarse obstáculos significativos para el desarrollo.
          span A continuación, se presentan algunas de las principales condiciones que pueden afectar su bienestar emocional y su proceso de aprendizaje dentro del entorno educativo.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

      .row.bg-fondo-slider.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
          figure
            .video
              <iframe width="1246" height="701" src="https://www.youtube.com/embed/GIdAgP1JqJc" title="Bienvenida asignatura Desarrollo del niño de 0 a 7 años." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      .row.bg-fondo-2.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          p.mb-4 Ante estos riesgos, la participación activa de padres, educadores y la comunidad en general se vuelve indispensable para construir un ambiente escolar que sea seguro, inclusivo y propicio para el desarrollo integral de los niños. Solo mediante un trabajo conjunto y sostenido es posible generar espacios educativos donde los niños se sientan protegidos, escuchados y estimulados cognitivamente.
          .col-10.col-xl-6.mx-auto
            .tarjeta.shadow.p-3.mb-5.bg-white
              .row.justify-content-around.align-items-center
                .d-none.d-lg-block.col-lg-2
                  img(src='@/assets/componentes/link-icon-circle.svg')
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.text-bold.mb-3 Desarrollo cognitivo y motor
                      p.text-small Les dejamos el siguiente libro donde podrán encontrar más información sobre el desarrollo cognitivo: 
                    .col-sm-auto
                      a.download-btn.boton.text-primary-2.bg-morado-oscuro(href="https://elibro.net/es/ereader/tecnologicadeloriente/50775?page=68 " target='_blank')
                        span.text-small Ir al sitio
                        i.fas.fa-arrow-right
      #t_2_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.1
          h2 Afectaciones prenatales

      p.mb-4 Durante el embarazo, el desarrollo del sistema nervioso del feto puede verse comprometido por diversas causas, como la exposición a sustancias tóxicas, infecciones maternas o deficiencias nutricionales. Estas condiciones, según <b>Paolini, Oiberman y Mansilla (2017)</b>, pueden provocar alteraciones en la formación cerebral y en las conexiones neuronales, lo que impacta directamente en el desarrollo cognitivo del niño. Entre los factores más relevantes se encuentran:

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Exposición a sustancias nocivas")
              p El consumo de alcohol, tabaco y drogas durante el embarazo está asociado con efectos negativos significativos. Por ejemplo, el consumo de alcohol puede provocar Síndrome Alcohólico Fetal (SAF), que incluye malformaciones cerebrales y retraso en el desarrollo cognitivo. La nicotina y otras sustancias afectan la oxigenación y nutrición del feto, alterando su neurodesarrollo.
            .div(titulo="Infecciones maternas")
              p Infecciones como la toxoplasmosis, el citomegalovirus y el virus del Zika son especialmente peligrosas, ya que pueden causar malformaciones cerebrales, alteraciones neurológicas severas e incluso microcefalia.
            .div(titulo="Deficiencias nutricionales")
              p La carencia de micronutrientes esenciales, como el ácido fólico y el hierro, puede generar alteraciones en el cierre del tubo neural y afectar la formación adecuada del sistema nervioso central, influyendo en la capacidad de aprendizaje y otras funciones cognitivas posteriores.
            .div(titulo="Estrés y ansiedad materna")
              p Altos niveles de cortisol (hormona del estrés) en el organismo de la madre durante el embarazo pueden influir negativamente en el desarrollo cerebral fetal, afectando procesos como la memoria y la atención.

      .row.mb-4.mx-0
        .col-12.col-xl-8.d-flex.align-items-center.bg-rosa.p-4(data-aos="fade-up")
          p.mb-0 Por su parte, <b>Dulay (2024)</b> complementa este enfoque señalando que los factores de riesgo durante el embarazo también incluyen condiciones médicas preexistentes, hábitos de vida y antecedentes obstétricos, los cuales pueden tener un impacto significativo tanto en la salud materna como fetal. Por ello, la evaluación cuidadosa de estos factores por parte de los profesionales de la salud es esencial.
        .d-none.d-xl-block.col-4.px-0
          img.h-100(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')

      p.mb-4 Entre los riesgos específicos identificados por Dulay se incluyen:

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Diabetes mellitus preexistente
                p Afecta aproximadamente al 1% de las embarazadas. Esta condición aumenta el riesgo de complicaciones como pielonefritis, cetoacidosis y malformaciones fetales. La diabetes gestacional, que aparece en cerca del 8% de los casos, también debe ser controlada rigurosamente. Un buen manejo de la glucosa es fundamental para evitar daños al feto.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Trastornos hipertensivos
                p Comprenden la hipertensión crónica y la preeclampsia. La hipertensión gestacional se caracteriza por un aumento de la presión arterial después de las 20 semanas de gestación. Estas condiciones requieren atención prenatal temprana y, en algunos casos, tratamiento médico para disminuir riesgos de complicaciones.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Trastornos tiroideos
                p El hipotiroidismo no tratado durante el embarazo puede derivar en complicaciones graves como el aborto espontáneo y déficits intelectuales en el feto. Por ello, se debe hacer un seguimiento exhaustivo en mujeres con antecedentes de disfunción tiroidea.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Infecciones de transmisión sexual (ITS)
                p La detección de ITS como el VIH, la sífilis y la hepatitis forma parte de las pruebas de rutina durante el embarazo. El tratamiento adecuado de estas infecciones es esencial para evitar efectos adversos en el bebé.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Anomalías estructurales del útero
                p Alteraciones como la incompetencia cervical o malformaciones uterinas pueden aumentar el riesgo de aborto espontáneo y parto prematuro. En ciertos casos, estas anomalías requieren intervención quirúrgica.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Edad materna
                p Las madres adolescentes y las mayores de 35 años presentan mayor probabilidad de enfrentar complicaciones obstétricas. En estos casos, se recomienda la realización de estudios genéticos y ecografías detalladas para identificar anomalías de manera temprana.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Embarazos múltiples
                p Representan un riesgo mayor de parto prematuro, bajo peso al nacer y anomalías cromosómicas. Además, se recomienda que las parejas que ya han tenido un hijo con un trastorno genético consulten con un especialista en genética para evaluar los riesgos en futuras gestaciones.

      #t_2_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.2
          h2 Afectaciones perinatales

      .row.mb-4
        .col-12.col-xl-8
          .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-41.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Los eventos que ocurren durante el parto y en los primeros minutos de vida pueden tener un impacto significativo en el desarrollo cognitivo infantil. Las complicaciones perinatales, como la <b>hipoxia</b> (falta de oxígeno), el <b>bajo peso al nacer</b> y el <b>parto prematuro</b>, están asociadas con un mayor riesgo de retrasos en el desarrollo cognitivo. Estas condiciones afectan la <b>maduración cerebral</b> y pueden aumentar la vulnerabilidad del niño a desarrollar <b>trastornos neurológicos</b>. (<b>Paolini, Oiberman y Mansilla, 2017</b>)
          span Estas afectaciones se manifiestan en el período inmediatamente anterior, durante y posterior al nacimiento. A continuación, se describen los principales factores de riesgo perinatales identificados:
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')

      TabsC.mb-4
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Hipoxia neonatal', :icon="require('@/assets/curso/unidad/img-43.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-44.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Hipoxia neonatal
              p(data-aos='fade-up') La falta de oxígeno durante el nacimiento puede causar daños cerebrales permanentes, con consecuencias directas sobre funciones cognitivas y motoras. La severidad del daño depende del tiempo que el cerebro permanece sin oxígeno y de la rapidez con que se actúe médicamente.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Bajo peso al nacer', :icon="require('@/assets/curso/unidad/img-43.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-45.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Bajo peso al nacer
              p(data-aos='fade-up') Los recién nacidos con un peso inferior a 2.5 kilogramos presentan mayor probabilidad de padecer problemas neurológicos y retrasos en el desarrollo. Esta condición puede deberse a un crecimiento intrauterino restringido o a un nacimiento prematuro, y suele estar relacionada con deficiencias en la oxigenación y nutrición fetal.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Parto prematuro', :icon="require('@/assets/curso/unidad/img-43.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-46.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Parto prematuro 
              p(data-aos='fade-up') El nacimiento antes de las 37 semanas de gestación se considera prematuro. En estos casos, el sistema nervioso del bebé no ha alcanzado su desarrollo completo, lo que puede derivar en dificultades futuras en habilidades cognitivas, como la memoria, atención, lenguaje y resolución de problemas.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Complicaciones médicas', :icon="require('@/assets/curso/unidad/img-43.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-73.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Complicaciones médicas
              p(data-aos='fade-up') Algunas complicaciones que se presentan durante el periodo perinatal, como las hemorragias intracraneales o infecciones neonatales (por ejemplo, la meningitis), pueden interferir con la formación de conexiones neuronales en el cerebro, impactando negativamente el desarrollo cognitivo del niño a corto y largo plazo.

      p.mb-4 Estas condiciones subrayan la importancia de una <b>atención perinatal oportuna y especializada</b>, que permita prevenir, detectar y tratar rápidamente cualquier evento que pueda poner en riesgo la salud neurológica del recién nacido. La intervención temprana en estos casos es fundamental para minimizar secuelas y favorecer un desarrollo lo más cercano posible a los parámetros esperados.

      .row.bg-verde.bg-full-width.py-4.mb-5
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Factores que afectan el desarrollo cognitivo infantil: riesgos postnatales, trastornos neurológicos y estimulación
            p.mb-5(data-aos="fade-up") Se invita a leer el documento Factores que afectan el desarrollo cognitivo infantil, donde se abordan las condiciones postnatales, neurológicas y ambientales que inciden en el desarrollo intelectual de los niños.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Factores que afectan el desarrollo cognitivo infantil: riesgos postnatales, trastornos neurológicos y estimulación
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/50775?page=68") David Lara, P. & García Vidales, A. (2015). Desarrollo cognitivo y motor: técnico superior en educación infantil.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/") E-Libro
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=JpWj8OYUbxc") [Vídeo] FUNDACIÓN DE WAAL. (2021). Factores que intervienen en el neurodesarrollo de los niños y niñas
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
