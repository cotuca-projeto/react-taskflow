import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";

export interface InstanceDateProps {
  imageUrl: string;
  userProfile: string;
}

export default function ({ imageUrl, userProfile }: InstanceDateProps) {
  return (
    <>
      <Sidebar imageUrl={imageUrl} userProfile={userProfile}/>
      <Navbar/>
    </>
  );
}
