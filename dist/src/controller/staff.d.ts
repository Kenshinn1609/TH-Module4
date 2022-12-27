declare class StaffController {
    index(req: any, res: any, next: any): Promise<void>;
    create(req: any, res: any): Promise<void>;
    addStaff(req: any, res: any): Promise<void>;
    showFormUpdate(req: any, res: any): Promise<void>;
    update(req: any, res: any, next: any): Promise<void>;
    delete(req: any, res: any): Promise<void>;
    infoUser(req: any, res: any): Promise<void>;
    search(req: any, res: any, next: any): Promise<void>;
}
export default StaffController;
