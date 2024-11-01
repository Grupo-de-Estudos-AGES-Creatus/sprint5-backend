import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    create(createUserDto: CreateUserDto): Promise<string>;
    findAll(): Promise<{
        id: number;
        email: string;
        username: string;
        password: string;
        role: string;
        matricula: string;
        course: string | null;
        github: string | null;
        semester: string | null;
        n_of_absences: number | null;
        img_url: string | null;
        created_at: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        email: string;
        username: string;
        password: string;
        role: string;
        matricula: string;
        course: string | null;
        github: string | null;
        semester: string | null;
        n_of_absences: number | null;
        img_url: string | null;
        created_at: Date;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        email: string;
        username: string;
        password: string;
        role: string;
        matricula: string;
        course: string | null;
        github: string | null;
        semester: string | null;
        n_of_absences: number | null;
        img_url: string | null;
        created_at: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        email: string;
        username: string;
        password: string;
        role: string;
        matricula: string;
        course: string | null;
        github: string | null;
        semester: string | null;
        n_of_absences: number | null;
        img_url: string | null;
        created_at: Date;
    }>;
}
