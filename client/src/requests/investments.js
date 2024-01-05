import axios from "./axios"



export const createInvestmentsRequest = async (investments) => {
    
    return axios.post(`/investments`, investments)
    
    
}

export const getInvestmentsRequest = async (userId) => {
    return axios.get(`/investments/${userId}`);
};


export const updateInvestmentRequest = async (investments) => {
    
    return axios.put(`/investments${investments.id}`, investments)
    
}

export const opportunitiesRequest = async () => {
    
    return axios.get(`/opportunities`)
    
}
