export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad:
      'factores de riesgo en el desarrollo integral de la primera infancia',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Factores de riesgo en el desarrollo físico de los niños',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Factores de riesgo del desarrollo cognitivo infantil',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Factores de riesgo psicosocial',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'World Health Organization: WHO. (2020, 19 noviembre). Nuevas amenazas para la salud de los niños y los adolescentes.',
      link:
        'https://www.who.int/es/news-room/fact-sheets/detail/children-new-threats-to-health',
    },
    {
      referencia:
        'Clínica EM. (2023). Factores que intervienen en la calidad del sueño. Clínica EM.',
      link:
        'https://clinicaem.com/factores-que-intervienen-en-la-calidad-del-sueno/',
    },
    {
      referencia:
        'De Asociación Argentina de Orientadores Familiares, V. T. L. E. (2020, 19 agosto). Factores de riesgo en la infancia. Asociación Argentina de Orientadores Familiares.',
      link: 'https://aaofamiliares.com/2020/08/19/factores-de-riesgo/',
    },
    {
      referencia:
        'Paolini, C. I., Oiberman, A., & Mansilla, M. (2017). Desarrollo cognitivo en la primera infancia: influencia de los factores de riesgo biológicos y ambientales. Subjetividad y procesos cognitivos, 21(2), 162-183.',
      link: 'https://www.scielo.org.ar/pdf/spc/v21n2/v21n2a08.pdf',
    },
    {
      referencia:
        'Uribe, M. C. O., Arce, D. C. O., & Navarrete, C. E. (2019). Factores de riesgo en el crecimiento y desarrollo de niños preescolares Cali 2018.',
      link: 'https://www.redalyc.org/journal/559/55964256021/html/',
    },
    {
      referencia:
        'Ferrer Arrocha, Marlene, Fernández Rodríguez, Celia, & González Pedroso, María Teresa. (2020). Factores de riesgo relacionados con el sobrepeso y la obesidad en niños de edad escolar. Revista Cubana de Pediatría, 92(2),',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S0034-75312020000200004&lng=es&tlng=es',
    },
    {
      referencia:
        'UniProyecta. (2022, 27 septiembre). Definición de desnutrición según la OMS. UniProyecta.',
      link: 'https://uniproyecta.com/definicion-de-desnutricion-segun-la-oms/',
    },
    {
      referencia:
        'Paolini, C. I., Oiberman, A., & Mansilla, M. (2017). Desarrollo cognitivo en la primera infancia: influencia de los factores de riesgo biológicos y ambientales.',
      link:
        'https://www.scielo.org.ar/scielo.php?script=sci_arttext&pid=S1852-73102017000200008',
    },
    {
      referencia:
        'Gómez Fernández, L. (2024). Factores clave en el desarrollo cognitivo infantil.',
      link:
        'https://nanoskids.es/factores-que-influyen-en-el-desarrollo-cognitivo-infantil/',
    },
    {
      referencia:
        'Dulay, A. T. (2024, 6 marzo). Factores de riesgo para complicaciones del embarazo. Manual MSD Versión Para Profesionales.',
      link:
        'https://www.msdmanuals.com/es/professional/ginecolog%C3%ADa-y-obstetricia/complicaciones-prenatales/factores-de-riesgo-para-complicaciones-del-embarazo#Parto-pret%C3%A9rmino-previo_v21452928_es',
    },
    {
      referencia:
        'Agudelo Saldarriaga, S., Calderón Acevedo, V., & Cano Valencia, C. (2017). Factores protectores y de riesgo psicosocial de los niños y niñas en estado de vulnerabilidad social que habitan en inquilinatos y pertenecen a la Corporación Sueños y Huellas del Mañana [Tesis Psicología, Institución Universitaria de Envigado].',
      link:
        'https://bibliotecadigital.iue.edu.co/bitstream/20.500.12717/81/1/iue_rep_pre_psi_agudelo_2017_riesgo_psicosocial.pdf',
    },
    {
      referencia: 'Factores psicosociales en la niñez – MAS VIDA. (s. f.).',
      link:
        'https://masvida.org.ar/eii-life-ninez/factores-psicosociales-en-la-ninez/',
    },
    {
      referencia:
        'Robledo, R., García, P., & Nicasio, J. (2008). El contexto familiar y su papel en el desarrollo socio-emocional de los niños: revisión de estudios empíricos[1] . INFAD Revista de Psicología, 4, (núm. 1, 2008, pp. 75-82), SSN (Versión impresa): 0214-9877.',
      link: 'https://www.redalyc.org/pdf/3498/349832319007.pdf',
    },
    {
      referencia:
        'Instituto Colombiano de Bienestar Familiar. ICBF. (2021). Orientaciones para el acompañamiento psicosocial con los niños, las niñas, los adolescentes y sus familias (Edición noviembre, Vol. 1).',
      link:
        'https://www.icbf.gov.co/system/files/procesos/pu4.p_cartilla_orientaciones_para_el_acompanamiento_psicosocial_con_los_nna_y_sus_familias_v1.pdf',
    },
    {
      referencia:
        'Dale, F. H. (2005). Relaciones tempranas entre pares y sus Impactos en el Desarrollo Infantil. Enciclopedia Sobre el Desarrollo En la Primera Infancia.',
      link:
        'https://www.enciclopedia-infantes.com/pdf/expert/relaciones-entre-pares/segun-los-expertos/relaciones-tempranas-entre-pares-y-sus-impactos-en-el',
    },
    {
      referencia:
        'Terapify. (2024). Salud mental en niños: ¿qué es y por qué es importante?',
      link: 'https://www.terapify.com/blog/salud-mental-en-ninos/',
    },
  ],
  glosario: [
    {
      termino: 'Abandono',
      significado:
        'La falta de atención o cuidado adecuado por parte de los cuidadores principales, lo que puede afectar el desarrollo emocional y social de los niños.',
    },
    {
      termino: 'Aislamiento',
      significado:
        'La ausencia de interacciones sociales saludables, que puede limitar las habilidades sociales y causar problemas emocionales como ansiedad o depresión.',
    },
    {
      termino: 'Bullying',
      significado:
        'Conducta agresiva y repetida entre pares que puede generar estrés, inseguridad y problemas psicológicos en los niños.',
    },
    {
      termino: 'Desnutrición',
      significado:
        'Insuficiencia en la ingesta de nutrientes esenciales, afectando el desarrollo físico y cognitivo de los niños.',
    },
    {
      termino: 'Estigma',
      significado:
        'Prejuicios sociales hacia niños que enfrentan problemas de salud mental o condiciones diferentes, limitando su integración social.',
    },
    {
      termino: 'Maltrato',
      significado:
        'Abuso físico, emocional o psicológico que puede tener consecuencias graves en el bienestar mental y físico de los niños.',
    },
    {
      termino: 'Pobreza',
      significado:
        'Condición socioeconómica que puede limitar el acceso de los niños a servicios básicos, alimentación y educación, aumentando la vulnerabilidad física y emocional.',
    },
    {
      termino: 'Sobreexigencia',
      significado:
        'Presión excesiva en el rendimiento académico o deportivo, lo que puede derivar en estrés crónico y ansiedad.',
    },
    {
      termino: 'Trauma',
      significado:
        'Experiencia impactante o dolorosa, como desastres naturales o pérdida de un ser querido, que afecta el bienestar emocional y psicológico.',
    },
    {
      termino: 'Violencia',
      significado:
        'Exposición a actos agresivos en el hogar, la escuela o la comunidad que impactan el desarrollo emocional, social y físico de los niños.',
    },
  ],
}
