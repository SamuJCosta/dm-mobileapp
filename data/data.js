const data = [
    {
        title: "Dr.Paula",
        consultorio: "Consultório de Santo Tirso",
        distancia: 2.5,
        preco: 100,
        phone: 912345678,
        rating: 5,
        numerAvaliations: 20,
        horario: "Segunda - Sexta das 09h - 18h",
        imgUrl: require('../assets/DrPaula.png'),
        descricao: "Dr. Paula, um dos veterinários mais qualificados e experientes e proprietária do mais conveniente Consultório de Santo Tirso, o nosso paraíso está situado no coração da cidade com um ambiente agradável. Estamos prontos para tratar seus amados cães e filhotes com amor e envolvimento. Marque já a consulta!",
        agendas: {
            "2024-04-30": 8, // Exemplo: 3 consultas agendadas para o dia 18 de abril de 2024
            "2024-04-26": 8, // Exemplo: 2 consultas agendadas para o dia 19 de abril de 2024
            // Outros dias...
        }    
    },
    {
        title: "David",
        consultorio: "Consultório de Bragança",
        distancia: 2.5,
        preco: 100,
        phone: 912345678,
        rating: 4.5,
        numerAvaliations: 20,
        horario: "Segunda - Sexta das 09h - 18h",
        imgUrl: require('../assets/DrPaula.png'),
        descricao: "Dr. Paula, um dos veterinários mais qualificados e experientes e proprietária do mais conveniente Consultório de Santo Tirso, o nosso paraíso está situado no coração da cidade com um ambiente agradável. Estamos prontos para tratar seus amados cães e filhotes com amor e envolvimento.Marque já a consulta!",
        agendas: {
            "2024-04-18": 8, // Exemplo: 3 consultas agendadas para o dia 18 de abril de 2024
            "2024-04-19": 2, // Exemplo: 2 consultas agendadas para o dia 19 de abril de 2024
            // Outros dias...
        }
    },
    {
        title: "Ricardo",
        consultorio: "Consultório Mata Real",
        distancia: 2.5,
        preco: 100,
        phone: 912345678,
        rating: 1,
        numerAvaliations: 20,
        horario: "Segunda - Sábado das 09h - 18h",
        imgUrl: require('../assets/DrPaula.png'),
        descricao: "Dr. Paula, um dos veterinários mais qualificados e experientes e proprietária do mais conveniente Consultório de Santo Tirso, o nosso paraíso está situado no coração da cidade com um ambiente agradável. Estamos prontos para tratar seus amados cães e filhotes com amor e envolvimento.Marque já a consulta!",
        agendas: {
            "2024-04-18": 3, // Exemplo: 3 consultas agendadas para o dia 18 de abril de 2024
            "2024-04-19": 2, // Exemplo: 2 consultas agendadas para o dia 19 de abril de 2024
            // Outros dias...
        }

    },
    {
        title: "David",
        consultorio: "Consultório Mata Real",
        distancia: 2.5,
        preco: 100,
        phone: 912345678,
        rating: 4.1,
        numerAvaliations: 20,
        horario: "Segunda - Sexta das 09h - 18h",
        imgUrl: require('../assets/DrPaula.png'),
        descricao: "Dr. Paula, um dos veterinários mais qualificados e experientes e proprietária do mais conveniente Consultório de Santo Tirso, o nosso paraíso está situado no coração da cidade com um ambiente agradável. Estamos prontos para tratar seus amados cães e filhotes com amor e envolvimento.Marque já a consulta!",
        agendas: {
            "2024-04-18": 3, // Exemplo: 3 consultas agendadas para o dia 18 de abril de 2024
            "2024-04-19": 2, // Exemplo: 2 consultas agendadas para o dia 19 de abril de 2024
            // Outros dias...
        }

    },
    {
        title: "Samu",
        consultorio: "Consultório Mata Real",
        distancia: 2.5,
        preco: 100,
        phone: 912345678,
        rating: 3.5,
        numerAvaliations: 20,
        horario: "Segunda - Sexta das 09h - 18h",
        imgUrl: require('../assets/DrPaula.png'),
        descricao: "Dr. Paula, um dos veterinários mais qualificados e experientes e proprietária do mais conveniente Consultório de Santo Tirso, o nosso paraíso está situado no coração da cidade com um ambiente agradável. Estamos prontos para tratar seus amados cães e filhotes com amor e envolvimento.Marque já a consulta!",
        agendas: {
            "2024-04-18": 3, // Exemplo: 3 consultas agendadas para o dia 18 de abril de 2024
            "2024-04-19": 2, // Exemplo: 2 consultas agendadas para o dia 19 de abril de 2024
            // Outros dias...
        }

    },
    {
        title: "Afonso",
        consultorio: "Consultório Mata Real",
        distancia: 2.5,
        preco: 100,
        phone: 912345678,
        rating: 3.5,
        numerAvaliations: 20,
        horario: "Segunda - Sexta das 09h - 18h",
        imgUrl: require('../assets/DrPaula.png'),
        descricao: "Dr. Paula, um dos veterinários mais qualificados e experientes e proprietária do mais conveniente Consultório de Santo Tirso, o nosso paraíso está situado no coração da cidade com um ambiente agradável. Estamos prontos para tratar seus amados cães e filhotes com amor e envolvimento.Marque já a consulta!",
        agendas: {
            "2024-04-18": 3, // Exemplo: 3 consultas agendadas para o dia 18 de abril de 2024
            "2024-04-19": 2, // Exemplo: 2 consultas agendadas para o dia 19 de abril de 2024
            // Outros dias...
        }

    },
    {
        title: "Samu",
        consultorio: "Consultório Mata Real",
        distancia: 2.5,
        preco: 100,
        phone: 912345678,
        rating: 3.5,
        numerAvaliations: 20,
        horario: "Segunda - Sexta das 09h - 18h",
        imgUrl: require('../assets/DrPaula.png'),
        descricao: "Dr. Paula, um dos veterinários mais qualificados e experientes e proprietária do mais conveniente Consultório de Santo Tirso, o nosso paraíso está situado no coração da cidade com um ambiente agradável. Estamos prontos para tratar seus amados cães e filhotes com amor e envolvimento.Marque já a consulta!",
        agendas: {
            "2024-04-18": 3, // Exemplo: 3 consultas agendadas para o dia 18 de abril de 2024
            "2024-04-19": 2, // Exemplo: 2 consultas agendadas para o dia 19 de abril de 2024
            // Outros dias...
        }

    },
    {
        title: "Samu",
        consultorio: "Consultório Mata Real",
        distancia: 2.5,
        preco: 100,
        phone: 912345678,
        rating: 3.5,
        numerAvaliations: 20,
        horario: "Segunda - Sexta das 09h - 18h",
        imgUrl: require('../assets/DrPaula.png'),
        descricao: "Dr. Paula, um dos veterinários mais qualificados e experientes e proprietária do mais conveniente Consultório de Santo Tirso, o nosso paraíso está situado no coração da cidade com um ambiente agradável. Estamos prontos para tratar seus amados cães e filhotes com amor e envolvimento.Marque já a consulta!",
        agendas: {
            "2024-04-18": 3, // Exemplo: 3 consultas agendadas para o dia 18 de abril de 2024
            "2024-04-19": 2, // Exemplo: 2 consultas agendadas para o dia 19 de abril de 2024
            // Outros dias...
        }
    },
    {
        title: "Ricardo",
        consultorio: "Consultório Mata Real",
        distancia: 2.5,
        preco: 100,
        phone: 912345678,
        rating: 3.5,
        numerAvaliations: 20,
        horario: "Segunda - Sexta das 09h - 18h",
        imgUrl: require('../assets/DrPaula.png'),
        descricao: "Dr. Paula, um dos veterinários mais qualificados e experientes e proprietária do mais conveniente Consultório de Santo Tirso, o nosso paraíso está situado no coração da cidade com um ambiente agradável. Estamos prontos para tratar seus amados cães e filhotes com amor e envolvimento.Marque já a consulta!",
        agendas: {
            "2024-04-18": 3, // Exemplo: 3 consultas agendadas para o dia 18 de abril de 2024
            "2024-04-19": 2, // Exemplo: 2 consultas agendadas para o dia 19 de abril de 2024
            // Outros dias...
        }
    },
    {
        title: "Consultório Mata Real",
        consultorio: "Consultório Mata Real",
        distancia: 2.5,
        preco: 100,
        phone: 912345678,
        rating: 3.5,
        numerAvaliations: 20,
        horario: "Segunda - Sexta das 09h - 18h",
        imgUrl: require('../assets/DrPaula.png'),
        descricao: "Dr. Paula, um dos veterinários mais qualificados e experientes e proprietária do mais conveniente Consultório de Santo Tirso, o nosso paraíso está situado no coração da cidade com um ambiente agradável. Estamos prontos para tratar seus amados cães e filhotes com amor e envolvimento.Marque já a consulta!",
        agendas: {
            "2024-04-18": 3, // Exemplo: 3 consultas agendadas para o dia 18 de abril de 2024
            "2024-04-19": 2, // Exemplo: 2 consultas agendadas para o dia 19 de abril de 2024
            // Outros dias...
        }
    },
]


export default data;