import SettingsBarItem from "@/Components/SettingsBar/SettingsBarItem";
import { HomeSidebar } from "@/Components/components";
import SettingsBar from "@/Components/SettingsBar/SettingsBar";


const LearningPreferences = () => {
  return (
    <div className="grid grid-cols-12 w-full h-screen bg-gradient-to-b from-slate-100 to-white">
      <div className="col-span-2">
        <HomeSidebar pageNumber={4} />
      </div>
      <div className="col-span-3 p-2">
        <SettingsBar
          activeItem={6}
        />
      </div>
    </div>
  );
};

export default LearningPreferences;
