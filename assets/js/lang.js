document.addEventListener('DOMContentLoaded', function () {
    const idiomaSelector = document.getElementById('idioma');

    let idiomaGuardado = localStorage.getItem('idioma');
    if (!idiomaGuardado) {
        idiomaGuardado = idiomaSelector.value;
        localStorage.setItem('idioma', idiomaGuardado);
    } else {
        idiomaSelector.value = idiomaGuardado;
    }

    const traducciones = {
        es: {
            t1: 'Estudiante de Ingeniería en Sistemas y Redes Informáticas',
            dw: 'Descargar CV',
            txtBio1: 'Mi nombre es Roberto Francisco Reyes Palomo soy un un apasionado estudiante de Ingeniería en Sistemas en la Universidad Gerardo Barrios de Usulutan (UGB) donde estoy en mi cuarto año de estudios. Desde una edad temprana, Mostre un interés notable por la tecnología y la informática, lo que me llevó a decidir por una carrera en este campo.',
            txtBio2: 'Naci el 9 de agosto de 2002 en la Ciudad de Jiquilisco, creci en un entorno donde la innovación tecnológica estaba siempre presente. Mi interés por la ciberseguridad comenzó en el instituto, cuando participe en un eventos relacionado con la informática y aprendi sobre la importancia de proteger la información en un mundo cada vez más digitalizado.',
            txtBio3: 'Durante mi tiempo en la universidad, he dedicado y rendido académicamente. He participado en varios proyectos de investigación y competencias relacionados con la tecnologia ya que estuve en el equipo innotech. Uno de sus logros más notables fue su participación en el equipo que participamos en una carrera de carrito Interuniversitario 2023", donde desarrollaron.',
            name: 'Roberto Reyes',
            tagline: 'Portafolio',
            navHome: 'Inicio',
            navAbout: 'Sobre Mí',
            navProjects: 'Proyectos',
            navBlog: 'Blog',
            skillsTitle: 'Habilidades',
            hardSkillsTitle: 'Habilidades Duras',
            hardSkill1: 'Administración de redes',
            hardSkill2: 'Gestión de Bases de Datos',
            softSkillsTitle: 'Habilidades Blandas',
            softSkill1: 'Comunicación efectiva.',
            softSkill2: 'Trabajo en equipo.',
            softSkill3: 'Adaptabilidad y aprendizaje continuo',
            interestsTitle: 'Áreas de Interés',
            softwareDevTitle: 'Desarrollo de Software',
            softwareDevDesc: 'Aplicaciones Web y Móviles: Diseño, desarrollo y mantenimiento de aplicaciones para web y dispositivos móviles.',
            networkAdminTitle: 'Administración de Redes y Sistemas',
            networkAdminDesc: 'Gestión de Redes: Diseño, implementación y mantenimiento de infraestructuras de red. Administración de Servidores: Gestión de servidores y sistemas operativos en entornos corporativos.',
            iotTitle: 'Internet de las Cosas (IoT)',
            iotDesc: 'Desarrollo de Dispositivos IoT: Diseño y programación de dispositivos conectados. Integración de Sistemas IoT: Conexión y gestión de dispositivos IoT para crear sistemas interconectados.',
            valuesTitle: 'Valores Profesionales',
            ethicsTitle: 'Ética',
            ethicsDesc: 'Mantengo altos estándares éticos y de honestidad en todas mis interacciones profesionales, asegurando la transparencia y confianza en cada proyecto que realizo.',
            commitmentTitle: 'Compromiso',
            commitmentDesc: 'Dedico el tiempo y esfuerzo necesarios para cumplir con los objetivos y expectativas, entregando resultados de alta calidad en cada tarea asignada.',
            respectTitle: 'Respeto',
            respectDesc: 'Trabajo de manera que se respete las opiniones de los demás y enfocandome en asegurar un ambiente de tranquilidad y mucho compromiso',
            collaborationTitle: 'Colaboración',
            collaborationDesc: 'Trabajo efectivamente en equipos multidisciplinarios, promoviendo un ambiente de cooperación y respeto, para alcanzar metas comunes de manera eficiente.',
            awardsTitle: 'Premios y Reconocimientos',
            award1Title: 'Carros Seguidores en línea - FLISOL',
            contactTitle: 'Contacto',
            emailTitle: 'Correo'
        },
        en: {
            t1: 'Computer Systems and Network Engineering Student',
            dw: 'Download CV',
            txtBio1: 'My name is Roberto Francisco Reyes Palomo and I am a passionate student of Systems Engineering at the University Gerardo Barrios de Usulutan (UGB) where I am in my fourth year of studies. From an early age, I showed a remarkable interest in technology and computer science, which led me to decide for a career in this field.',
            txtBio2: 'I was born on August 9, 2002 in the city of Jiquilisco, I grew up in an environment where technological innovation was always present. My interest in cybersecurity began in high school, when I participated in a computer-related event and learned about the importance of protecting information in an increasingly digitized world.',
            txtBio3: 'During my time at the university, I have dedicated and performed academically. I have participated in several research projects and competitions related to technology as I was on the innotech team. One of his most notable achievements was his participation in the team that participated in an Interuniversity Cart Race 2023", where they developed.',
            name: 'Roberto Reyes',
            tagline: 'Portfolio',
            navHome: 'Home',
            navAbout: 'About Me',
            navProjects: 'Projects',
            navBlog: 'Blog',
            skillsTitle: 'Skills',
            hardSkillsTitle: 'Hard Skills',
            hardSkill1: 'Network Administration',
            hardSkill2: 'Database Management',
            softSkillsTitle: 'Soft Skills',
            softSkill1: 'Effective Communication',
            softSkill2: 'Teamwork',
            softSkill3: 'Adaptability and Continuous Learning',
            interestsTitle: 'Areas of Interest',
            softwareDevTitle: 'Software Development',
            softwareDevDesc: 'Web and Mobile Applications: Design, development, and maintenance of applications for web and mobile devices.',
            networkAdminTitle: 'Network and Systems Administration',
            networkAdminDesc: 'Network Management: Design, implementation, and maintenance of network infrastructures. Server Administration: Management of servers and operating systems in corporate environments.',
            iotTitle: 'Internet of Things (IoT)',
            iotDesc: 'IoT Device Development: Design and programming of connected devices. IoT Systems Integration: Connection and management of IoT devices to create interconnected systems.',
            valuesTitle: 'Professional Values',
            ethicsTitle: 'Ethics',
            ethicsDesc: 'I maintain high ethical standards and honesty in all my professional interactions, ensuring transparency and trust in every project I undertake.',
            commitmentTitle: 'Commitment',
            commitmentDesc: 'I dedicate the time and effort necessary to meet objectives and expectations, delivering high-quality results in every assigned task.',
            respectTitle: 'Respect',
            respectDesc: 'I work in a way that respects the opinions of others and focuses on ensuring a calm and committed environment',
            collaborationTitle: 'Collaboration',
            collaborationDesc: 'I work effectively in multidisciplinary teams, promoting a cooperative and respectful environment, to achieve common goals efficiently.',
            awardsTitle: 'Awards and Recognitions',
            award1Title: 'Carros Seguidores en línea - FLISOL',
            contactTitle: 'Contact',
            emailTitle: 'Email'
        }
    };

    function cambiarIdioma() {
        const idiomaSeleccionado = idiomaSelector.value;

        const t1 = document.getElementById('t1');
        const dw = document.getElementById('dw');
        const txtBio1 = document.getElementById('txtBio1');
        const txtBio2 = document.getElementById('txtBio2');
        const txtBio3 = document.getElementById('txtBio3');
        const skills = document.getElementById('skills');
        const name = document.getElementById('name');
        const tagline = document.getElementById('tagline');
        const navHome = document.getElementById('navHome');
        const navAbout = document.getElementById('navAbout');
        const navProjects = document.getElementById('navProjects');
        const navBlog = document.getElementById('navBlog');
        const skillsTitle = document.getElementById('skillsTitle');
        const hardSkillsTitle = document.getElementById('hardSkillsTitle');
        const hardSkill1 = document.getElementById('hardSkill1');
        const hardSkill2 = document.getElementById('hardSkill2');
        const softSkillsTitle = document.getElementById('softSkillsTitle');
        const softSkill1 = document.getElementById('softSkill1');
        const softSkill2 = document.getElementById('softSkill2');
        const softSkill3 = document.getElementById('softSkill3');
        const interestsTitle = document.getElementById('interestsTitle');
        const softwareDevTitle = document.getElementById('softwareDevTitle');
        const softwareDevDesc = document.getElementById('softwareDevDesc');
        const networkAdminTitle = document.getElementById('networkAdminTitle');
        const networkAdminDesc = document.getElementById('networkAdminDesc');
        const iotTitle = document.getElementById('iotTitle');
        const iotDesc = document.getElementById('iotDesc');
        const valuesTitle = document.getElementById('valuesTitle');
        const ethicsTitle = document.getElementById('ethicsTitle');
        const ethicsDesc = document.getElementById('ethicsDesc');
        const commitmentTitle = document.getElementById('commitmentTitle');
        const commitmentDesc = document.getElementById('commitmentDesc');
        const respectTitle = document.getElementById('respectTitle');
        const respectDesc = document.getElementById('respectDesc');
        const collaborationTitle = document.getElementById('collaborationTitle');
        const collaborationDesc = document.getElementById('collaborationDesc');
        const awardsTitle = document.getElementById('awardsTitle');
        const award1Title = document.getElementById('award1Title');
        const contactTitle = document.getElementById('contactTitle');
        const emailTitle = document.getElementById('emailTitle');

        if (t1) t1.textContent = traducciones[idiomaSeleccionado].t1;
        if (dw) dw.textContent = traducciones[idiomaSeleccionado].dw;
        if (txtBio1) txtBio1.textContent = traducciones[idiomaSeleccionado].txtBio1;
        if (txtBio2) txtBio2.textContent = traducciones[idiomaSeleccionado].txtBio2;
        if (txtBio3) txtBio3.textContent = traducciones[idiomaSeleccionado].txtBio3;
        if (skills) skills.textContent = traducciones[idiomaSeleccionado].skills;
        if (name) name.textContent = traducciones[idiomaSeleccionado].name;
        if (tagline) tagline.textContent = traducciones[idiomaSeleccionado].tagline;
        if (navHome) navHome.textContent = traducciones[idiomaSeleccionado].navHome;
        if (navAbout) navAbout.textContent = traducciones[idiomaSeleccionado].navAbout;
        if (navProjects) navProjects.textContent = traducciones[idiomaSeleccionado].navProjects;
        if (navBlog) navBlog.textContent = traducciones[idiomaSeleccionado].navBlog;
        if (skillsTitle) skillsTitle.textContent = traducciones[idiomaSeleccionado].skillsTitle;
        if (hardSkillsTitle) hardSkillsTitle.textContent = traducciones[idiomaSeleccionado].hardSkillsTitle;
        if (hardSkill1) hardSkill1.textContent = traducciones[idiomaSeleccionado].hardSkill1;
        if (hardSkill2) hardSkill2.textContent = traducciones[idiomaSeleccionado].hardSkill2;
        if (softSkillsTitle) softSkillsTitle.textContent = traducciones[idiomaSeleccionado].softSkillsTitle;
        if (softSkill1) softSkill1.textContent = traducciones[idiomaSeleccionado].softSkill1;
        if (softSkill2) softSkill2.textContent = traducciones[idiomaSeleccionado].softSkill2;
        if (softSkill3) softSkill3.textContent = traducciones[idiomaSeleccionado].softSkill3;
        if (interestsTitle) interestsTitle.textContent = traducciones[idiomaSeleccionado].interestsTitle;
        if (softwareDevTitle) softwareDevTitle.textContent = traducciones[idiomaSeleccionado].softwareDevTitle;
        if (softwareDevDesc) softwareDevDesc.textContent = traducciones[idiomaSeleccionado].softwareDevDesc;
        if (networkAdminTitle) networkAdminTitle.textContent = traducciones[idiomaSeleccionado].networkAdminTitle;
        if (networkAdminDesc) networkAdminDesc.textContent = traducciones[idiomaSeleccionado].networkAdminDesc;
        if (iotTitle) iotTitle.textContent = traducciones[idiomaSeleccionado].iotTitle;
        if (iotDesc) iotDesc.textContent = traducciones[idiomaSeleccionado].iotDesc;
        if (valuesTitle) valuesTitle.textContent = traducciones[idiomaSeleccionado].valuesTitle;
        if (ethicsTitle) ethicsTitle.textContent = traducciones[idiomaSeleccionado].ethicsTitle;
        if (ethicsDesc) ethicsDesc.textContent = traducciones[idiomaSeleccionado].ethicsDesc;
        if (commitmentTitle) commitmentTitle.textContent = traducciones[idiomaSeleccionado].commitmentTitle;
        if (commitmentDesc) commitmentDesc.textContent = traducciones[idiomaSeleccionado].commitmentDesc;
        if (respectTitle) respectTitle.textContent = traducciones[idiomaSeleccionado].respectTitle;
        if (respectDesc) respectDesc.textContent = traducciones[idiomaSeleccionado].respectDesc;
        if (collaborationTitle) collaborationTitle.textContent = traducciones[idiomaSeleccionado].collaborationTitle;
        if (collaborationDesc) collaborationDesc.textContent = traducciones[idiomaSeleccionado].collaborationDesc;
        if (awardsTitle) awardsTitle.textContent = traducciones[idiomaSeleccionado].awardsTitle;
        if (award1Title) award1Title.textContent = traducciones[idiomaSeleccionado].award1Title;
        if (contactTitle) contactTitle.textContent = traducciones[idiomaSeleccionado].contactTitle;
        if (emailTitle) emailTitle.textContent = traducciones[idiomaSeleccionado].emailTitle;

        localStorage.setItem('idioma', idiomaSeleccionado);
    }

    idiomaSelector.addEventListener('change', cambiarIdioma);

    cambiarIdioma();
});