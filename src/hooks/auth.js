import axios from "~/lib/axios";
import {  useRouter } from "next/navigation";
import { toast } from "./use-toast";
import { createSession, deleteSession } from "~/lib/session";

export const useAuth = () => {
  const router = useRouter();

  const login = async ({ setError, ...props }) => {
    setError([]);
    axios
      .post("/login", props)
      .then(async (res) => {
        if (res.data.code === 200){
          await createSession(res.data);
          router.push("/welcome");
          toast({
            variant: "success",
            title: "Berhasil melakukan authentikasi",
            description: "Melakukan redirect ke halaman selanjutnya",
          }); 
        } else {
          setError(res.data.message);
          toast({
            variant: "destructive",
            title: "Gagal melakukan authentikasi",
            description: "Silahkan periksa kembali kredensial anda",
          });         
        }})
      .catch((error) => toast({
        variant: "destructive",
        title: error.status + " Terjadi kegagalan server",
        description: "Silahkan coba lagi setelah beberapa menit atau hubungi admin",
      }));
  };

  const logout = async () => {
    deleteSession();
    router.push("/login");
  };

  return {
    login,
    logout,
  };
};
