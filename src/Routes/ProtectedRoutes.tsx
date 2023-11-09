import UserServices from "../services/userServices";

const userServices = new UserServices();

export const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
    const userAuthenticated = userServices.isAuthenticated();
    return userAuthenticated ? children : <h1>Usuário não autenticado</h1>;
}