// Take this file for example purpose only
import axios, { AxiosResponse } from 'axios';

const API_URL = 'Your URL';

// Define the types
interface Company {
    id: number;
    name: string;
    description: string;
    // Add other company fields here
}

interface Review {
    id: number;
    companyId: number;
    rating: number;
    comment: string;
    // Add other review fields here
}

interface CompanyData {
    name: string;
    description: string;
    // Add other fields needed to create a company
}

interface ReviewData {
    rating: number;
    comment: string;
    // Add other fields needed to create a review
}

// Fetch list of companies
export const fetchCompanies = async (): Promise<Company[]> => {
  try {
    const response: AxiosResponse<Company[]> = await axios.get(`${API_URL}/companies`);
    return response.data;
  } catch (error) {
    console.error('Error fetching companies:', error);
    throw error;
  }
};

// Fetch company details by ID
export const fetchCompanyDetails = async (id: number): Promise<Company> => {
  try {
    const response: AxiosResponse<Company> = await axios.get(`${API_URL}/companies/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching company details:', error);
    throw error;
  }
};

// Add a new company
export const addCompany = async (companyData: CompanyData): Promise<Company> => {
  try {
    const response: AxiosResponse<Company> = await axios.post(`${API_URL}/companies`, companyData);
    return response.data;
  } catch (error) {
    console.error('Error adding company:', error);
    throw error;
  }
};

// Add a review for a company
export const addReview = async (companyId: number, reviewData: ReviewData): Promise<Review> => {
  try {
    const response: AxiosResponse<Review> = await axios.post(`${API_URL}/companies/${companyId}/reviews`, reviewData);
    return response.data;
  } catch (error) {
    console.error('Error adding review:', error);
    throw error;
  }
};

// Fetch reviews for a company
export const fetchReviews = async (companyId: number): Promise<Review[]> => {
  try {
    const response: AxiosResponse<Review[]> = await axios.get(`${API_URL}/companies/${companyId}/reviews`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

export type { Company, Review, CompanyData, ReviewData };
