import { Opportunities } from "../models/opportunities.model.js";

const opportunitiesData = [
    {
        name: 'Tecnologia',
        amount: 145000.00,
        yield_rate: 0.10,
    },
    {
        name: 'Desarrolko',
        amount: 400000.00,
        yield_rate: 0.15,
    },
    {
        name: 'Energia',
        amount: 350000.00,
        yield_rate: 0.12,
    },
    {
        name: 'Infrestuctura',
        amount: 250000.00,
        yield_rate: 0.12,
    },
    {
        name: 'Medio Ambiente',
        amount: 600000.00,
        yield_rate: 0.12,
    },
];


export const seedDatabase = async () => {
    try {

        // Insertar varios usuarios
        await Opportunities.bulkCreate(opportunitiesData);

        console.log('Database seeded successfully');

    } catch (error) {

        console.error('Error seeding database:', error);

    }
}

