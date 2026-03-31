import { Hero } from "@/components/sections/hero";
import { CurrentRole } from "@/components/sections/current-role";
import { SelectedProjects } from "@/components/sections/selected-projects";
import { Capabilities } from "@/components/sections/capabilities";
import { PersonalNote } from "@/components/sections/personal-note";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CurrentRole />
      <SelectedProjects />
      <Capabilities />
      <PersonalNote />
    </>
  );
}
