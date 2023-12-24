import { Repository } from "typeorm"
import { Province } from "../entity/province"
import { AppDataSource } from "../data-source"

export default new class ProvinceServices {
    private readonly ProvinceRepository : Repository<Province> = AppDataSource.getRepository(Province)
    async create(data: any) : Promise<object | string> {
        try {
            const response = await this.ProvinceRepository.save(data)

            return {
                message: "success creating a new province",
                data: response
            }
        } catch (error) {
            return "message: something error while creating province"
        }
    }

    async update(id: string, data: any): Promise<object | string> {
      try {
        const numericId = parseInt(id, 10);
        if (isNaN(numericId)) {
          return {
            message: "Invalid ID provided",
            error: "Invalid input for type integer"
          };
        }
        const response = await this.ProvinceRepository.update(numericId, data);
    
        return {
          message: "success updating a province",
          data: response
        };
      } catch (error) {
        console.error('Error updating province:', error);
        return {
          message: "something error while updating province",
          error: error.message
        };
      }
    }

    async delete(id: string): Promise<object | string> {
        try {
            const numericId = parseInt(id, 10);
            if (isNaN(numericId)) {
                return {
                    message: "Invalid ID provided",
                    error: "Invalid input for type integer"
                };
            }
            const response = await this.ProvinceRepository.delete(numericId);
            return {
                message: "success deleting a province",
                data: response
            }
        } catch (error) {
            return "message: something error while deleting province"
        }
    }
    
    async getAll(): Promise<object | string> {
        try {
            const response = await this.ProvinceRepository.find()
            return {
                message: "success get all province",
                data: response
            }
        } catch (error) {
            return "message: something error while get all province"
        }
    }
}

