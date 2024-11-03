import axios, { AxiosResponse } from "axios";
import { BulkCreateFullFlashCard, CheckExistAccount, CreateFTag, CreateFullFlashCard, CreateFullPracticeFromTest, CreateFullQuiz, CreateFullTest, CreateTag, CreateTestFromQuizIds, EmailResetPassword, FetchingType, GetRecord, InitRecord, LangVersion, LoginPayload, RecordFetchingType, RefreshToken, RemarkWriting, ResendOTPPayload, SearchPayload, SignUpPayload, Skill, UpdateAccountPayload, UpdateAvatarPayload, UpdateFTag, UpdateFullFlashCard, UpdateFullQuiz, UpdateFullRecord, UpdateFullTest, UpdateQuiz, UpdateRecord, UpdateRecordConfig, UpdateTag, VerifyOtpForResetPasswordPayload, VerifyOtpPayload } from "./interfaces";
import { UUID } from "crypto";
import FormData from 'form-data';

export class AuthOperation {
    private baseUrl: string;
    private langQuery: string;

    constructor() {
        this.baseUrl = 'https://abc/v1/auth';
        this.langQuery = `lang=${LangVersion.vi}`;
    }

    public setLanguage(lang: LangVersion) {
        this.langQuery = `lang=${lang}`;
    }

    public async signup(payload: SignUpPayload) {
        try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/signup?${this.langQuery}`, payload, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error signing up: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    public async login(payload: LoginPayload) {
        try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/login?${this.langQuery}`, payload, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error logging in: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    public async verifyOtp(payload: VerifyOtpPayload) {
        try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/otp/verify?${this.langQuery}`, payload, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error verifying otp: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    
    public async resendOTP(payload: ResendOTPPayload) {
        try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/otp/resend?${this.langQuery}`, payload, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error verifying otp: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    public async refreshToken() {
        try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/token/refresh?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error logging in: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }
}

export class AccountOperation {
    private baseUrl: string;
    private langQuery: string;

    constructor() {
        this.baseUrl = 'https://abc/v1/accounts';
        this.langQuery = `lang=${LangVersion.vi}`;
    }

    setLanguage(lang: LangVersion) {
        this.langQuery = `lang=${lang}`;
    }

    async search(payload: SearchPayload, token: string) {
        try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/search?${this.langQuery}`, payload, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async findOne(id: UUID, token: string) {
        try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}/search/${id}?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async update(id: UUID, payload: UpdateAccountPayload, token: string) {
        try {
			const response: AxiosResponse = await axios.put(`${this.baseUrl}/update/${id}?${this.langQuery}`, payload, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error updating account: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async updateAvatar(id: UUID, payload: UpdateAvatarPayload, token: string) {
        try {
            const formData = new FormData();
            formData.append('avatar', payload.avatar);

			const response: AxiosResponse = await axios.put(`${this.baseUrl}/avatar/update/${id}?${this.langQuery}`, formData, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error updating avatar: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    // will return image url in data
    async getAvatar(id: UUID, token: string) {
        try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}/avatar/get/${id}?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error getting avatar: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    // get total amount number of accounts
    async count(token: string) {
        try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}/count?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async getAuthenticatedInfo(token: string) {
        try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}/`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async resetPassword(email: EmailResetPassword) {
        try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/password/reset?${this.langQuery}`, email, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async checkExist(email: CheckExistAccount) {
        try {      
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/check?${this.langQuery}`, email, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error.message);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    public async verifyOtpForResetPassword(payload: VerifyOtpForResetPasswordPayload) {
        try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/otp/verify?${this.langQuery}`, payload, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error verifying otp: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }
}

export class QuizOperation {
    private baseUrl: string;
    private langQuery: string;

    constructor() {
        this.baseUrl = 'https://abc/v1/quizzes';
        this.langQuery = `lang=${LangVersion.vi}`;
    }

    setLanguage(lang: LangVersion) {
        this.langQuery = `lang=${lang}`;
    }

    async create(payload: CreateFullQuiz, token: string) {
        try {       
			
			const formData = new FormData();
            formData.append('file', payload.file);
            formData.append('data', JSON.stringify(payload.data));
			
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/create?${this.langQuery}`, formData, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
		
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
	
		} catch (error: any) {
			console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		} 
    }

    //get all quizzes
    async search(token: string) {
        try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/search?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async findOne(id: UUID, token: string) {
        try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}/${id}?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async update(id: UUID, payload: UpdateFullQuiz, token: string) {
        try {       
			
			const formData = new FormData();
            formData.append('file', payload.file);
            formData.append('data', JSON.stringify(payload.data));
			
			const response: AxiosResponse = await axios.put(`${this.baseUrl}/update/${id}?${this.langQuery}`, formData, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
		
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
	
		} catch (error: any) {
			console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		} 
    }

    async delete(id: UUID, token: string) {
        try {
			const response: AxiosResponse = await axios.delete(`${this.baseUrl}/${id}?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error updating account: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async count(token: string) {
        try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}/count?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }
}

export class TestOperation {
    private baseUrl: string;
    private langQuery: string;
    constructor() {
        this.baseUrl = 'https://abc/v1/tests';
        this.langQuery = `lang=${LangVersion.vi}`;
    }

    setLanguage(lang: LangVersion) {
        this.langQuery = `lang=${lang}`;
    }
    
    async createFullTest(payload: CreateFullTest, token: string) {
        try {       
			
			const formData = new FormData();
            for (let i = 0; i < payload.files.length; i++) {
                formData.append('file', payload.files[i]);
            }

            formData.append('data', JSON.stringify(payload.data));
			
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/create?${this.langQuery}`, formData, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                },
                maxBodyLength: 10000000,
                maxContentLength: 10000000
			});
		
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
	
		} catch (error: any) {
			console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		} 
    }

    async createFromQuizIds(payload: CreateTestFromQuizIds, token: string) {
        try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/create_from_quiz_ids?${this.langQuery}`, payload, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    //get custome tests
    async search(option: FetchingType, payload: SearchPayload, token: string) {
        try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/search?option=${option}&${this.langQuery}`, payload, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async findOne(id: UUID, token: string) {
        try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}/search/${id}?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async update(id: UUID, payload: UpdateFullTest, token: string) {
        try {       
			
			const formData = new FormData();
            for (let i = 0; i < payload.files.length; i++) {
                formData.append('file', payload.files[i]);
            }

            formData.append('data', JSON.stringify(payload.data));
			
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/update/${id}?${this.langQuery}`, formData, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                },
                maxBodyLength: 10000000,
                maxContentLength: 10000000
			});
		
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
	
		} catch (error: any) {
			console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		} 
    }

    async delete(id: UUID, token: string) {
        try {
			const response: AxiosResponse = await axios.delete(`${this.baseUrl}/${id}?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error updating account: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async countRecordByTestId(testId: UUID, token: string) {
        try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}/records/count/${testId}?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async count(token: string) {
        try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}/count?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }
}

export class RecordOperation {
    private baseUrl: string;
    private langQuery: string;

    constructor() {
        this.baseUrl = 'https://abc/v1/records';
        this.langQuery = `lang=${LangVersion.vi}`;
    }

    setLanguage(lang: LangVersion) {
        this.langQuery = `lang=${lang}`;
    }

    async init(payload: InitRecord, token: string) {
        try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/init?${this.langQuery}`, payload, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }


    async search(payload: SearchPayload, option: RecordFetchingType, token: string) {
        try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/search?option=${option}&${this.langQuery}`, payload, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async findOne(id: UUID, token: string) {
        try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}/search/${id}?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async update(id: UUID, payload: UpdateFullRecord, token: string) {
        try {       
			
			const formData = new FormData();
            for (let i = 0; i < payload.writingFiles.length; i++) {
                formData.append('writingFile', payload.writingFiles[i]);
            }
            for (let i = 0; i < payload.speakingFiles.length; i++) {
                formData.append('speakingFile', payload.speakingFiles[i]);
            }

            formData.append('data', JSON.stringify(payload.data));
			
			const response: AxiosResponse = await axios.put(`${this.baseUrl}/update/${id}?${this.langQuery}`, formData, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
		
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
	
		} catch (error: any) {
			console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		} 
    }

    async updateConfig(id: UUID, payload: UpdateRecordConfig, token: string) {
        try {
			const response: AxiosResponse = await axios.put(`${this.baseUrl}/config/update/${id}?${this.langQuery}`, payload, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error updating account: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async delete(id: UUID, token: string) {
        try {
			const response: AxiosResponse = await axios.delete(`${this.baseUrl}/delete/${id}?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error updating account: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async getTestStat(testId: UUID, token: string) {
        try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}/stat/${testId}?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error updating account: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async getWritingAnswer(writingAnswerId: UUID, token: String) {
        try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}/writing/answer/${writingAnswerId}?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error updating account: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async createWritingRemark(writingAnswerId: UUID, payload: RemarkWriting, token: String) {
        try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/writing/remark/${writingAnswerId}?${this.langQuery}`, payload, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error updating account: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async count(token: string, accountId: UUID) {
        try {

            let query = "";
            if(accountId) {
                query = `accountId=${accountId}&`;
            }

			const response: AxiosResponse = await axios.get(`${this.baseUrl}/count?${query}${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

}


export class TagOperation {
    private baseUrl: string;
    private langQuery: string;

    constructor() {
        this.baseUrl = 'https://abc/v1/tags';
        this.langQuery = `lang=${LangVersion.vi}`;
    }

    setLanguage(lang: LangVersion) {
        this.langQuery = `lang=${lang}`;
    }

    async create(payload: CreateTag, token: string) {
        try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/create?${this.langQuery}`, payload, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    //get tags
    async search(payload: SearchPayload, token: string) {
        try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/search?${this.langQuery}`, payload ,{
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }


    async update(id: UUID, payload: UpdateTag, token: string) {
        try {
			const response: AxiosResponse = await axios.put(`${this.baseUrl}/update/${id}?${this.langQuery}`, payload, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error updating account: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async delete(id: UUID, token: string) {
        try {
			const response: AxiosResponse = await axios.delete(`${this.baseUrl}/delete/${id}?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error updating account: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async count(token: string) {
        try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}/count?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }
}

export class FTagOperation {
    private baseUrl: string;
    private langQuery: string;

    constructor() {
        this.baseUrl = 'https://abc/v1/ftags';
        this.langQuery = `lang=${LangVersion.vi}`;
    }

    setLanguage(lang: LangVersion) {
        this.langQuery = `lang=${lang}`;
    }

    async create(payload: CreateFTag, token: string) {
        try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/create?${this.langQuery}`, payload, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    //get ftags
    async search(payload: SearchPayload, token: string) {
        try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/search?${this.langQuery}`, payload ,{
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async findOne(id: UUID, token: string) {
        try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}/search/${id}?${this.langQuery}` ,{
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }


    async update(id: UUID, payload: UpdateFTag, token: string) {
        try {
			const response: AxiosResponse = await axios.put(`${this.baseUrl}/update/${id}?${this.langQuery}`, payload, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error updating account: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async delete(id: UUID, token: string) {
        try {
			const response: AxiosResponse = await axios.delete(`${this.baseUrl}/delete/${id}?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error updating account: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async count(token: string) {
        try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}/count?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }
}

export class PracticeOperation {
    private baseUrl: string;
    private langQuery: string;

    constructor() {
        this.baseUrl = 'https://abc/v1/practices';
        this.langQuery = `lang=${LangVersion.vi}`;
    }

    setLanguage(lang: LangVersion) {
        this.langQuery = `lang=${lang}`;
    }

    async create(payload: CreateFullPracticeFromTest, token: string) {
        try {       
			
			const formData = new FormData();
            for (let i = 0; i < payload.files.length; i++) {
                formData.append('file', payload.files[i]);
            }

            formData.append('data', JSON.stringify(payload.data));
			
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/create?${this.langQuery}`, formData, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
		
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
	
		} catch (error: any) {
			console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		} 
    }


    //get search by tag id
    async search(skill: Skill, tagId: UUID, page: string, size: string, hasPublished: boolean, token: string) {
        try {

            let query = "";
            if(skill) {
                query += `&skill=${skill}`;
            } 
            if(tagId) {
                query += `&tagId=${tagId}`;
            }
            
            query += `&hasPublished=${hasPublished}`;
            

			const response: AxiosResponse = await axios.get(`${this.baseUrl}/search?page=${page}&size=${size}${query}&${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async count(token: string) {
        try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}/count?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

}



// flash card

export class FlashCardOperation {
    private baseUrl: string;
    private langQuery: string;

    constructor() {
        this.baseUrl = 'https://abc/v1/flashcards';
        this.langQuery = `lang=${LangVersion.vi}`;
    }

    setLanguage(lang: LangVersion) {
        this.langQuery = `lang=${lang}`;
    }

    async create(payload: CreateFullFlashCard, token: string) {
        try {       
			
			const formData = new FormData();
            formData.append("file", payload.file);
            formData.append('data', JSON.stringify(payload.data));
			
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/create?${this.langQuery}`, formData, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
		
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
	
		} catch (error: any) {
			console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		} 
    }

    async bulkCreate(payload: BulkCreateFullFlashCard, token: string) {
        try {       
			
			const formData = new FormData();
            for (let i = 0; i < payload.files.length; i++) {
                formData.append('file', payload.files[i]);
            }
            formData.append('data', JSON.stringify(payload.data));
			
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/bulk_create?${this.langQuery}`, formData, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
		
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
	
		} catch (error: any) {
			console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		} 
    }

    
    async search(payload: SearchPayload, token: string) {
        try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/search?${this.langQuery}`, payload, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async findOne(id: UUID, token: string) {
        try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}/search/${id}?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }


    async update(id: UUID, payload: UpdateFullFlashCard, token: string) {
        try {       
			
			const formData = new FormData();
            formData.append("file", payload.file);
            formData.append('data', JSON.stringify(payload.data));
			
			const response: AxiosResponse = await axios.put(`${this.baseUrl}/update/${id}?${this.langQuery}`, formData, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
		
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
	
		} catch (error: any) {
			console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		} 
    }

    async delete(id: UUID, token: string) {
        try {
			const response: AxiosResponse = await axios.delete(`${this.baseUrl}/delete/${id}?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error updating account: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

    async count(token: string) {
        try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}/count?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }

}

// upload

export class UploadOperation {
    private baseUrl: string;

    constructor() {
        this.baseUrl = 'https://abc/v1/upload';
    }
    
    async search(filepath: string, token: string) {
        try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}?path=${filepath}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }


}

// remark request
export class RemarkRequestOperation {
    private baseUrl: string;
    private langQuery: string;

    constructor() {
        this.baseUrl = 'https://abc/v1/remark_requests';
        this.langQuery = `lang=${LangVersion.vi}`;
    }

    setLanguage(lang: LangVersion) {
        this.langQuery = `lang=${lang}`;
    }
    
    async search(payload: SearchPayload, token: string) {
        try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/search?${this.langQuery}`, payload, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }


    async delete(id: UUID, token: string) {
        try {
			const response: AxiosResponse = await axios.delete(`${this.baseUrl}/delete/${id}?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error updating account: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }


    async count(token: string) {
        try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}/count?${this.langQuery}`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
                headers: {
                    Authorization: `Bearer ${token}`
                },
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }
}

export class AppOperation {
    private baseUrl: string;

    constructor() {
        this.baseUrl = 'https://abc/v1';
    }

    async getPrivilegeConfig() {
        try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}/privilege_config`, {
				withCredentials: true,
                validateStatus: status => status >= 200 && status <= 500,
			});
			
			return {
                success: response.data.success,
                message: response.data.message,
                data: response.data.data,
                status: response.status
            };
		} 
		catch (error: any) {
			console.log("Error searching accounts: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { success: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
		}
    }
}