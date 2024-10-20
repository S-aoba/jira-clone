import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import { EditProjectForm } from "@/features/projects/components/edit-project-form";
import { getProject } from "@/features/projects/queries";

interface ProjectIdSettingPageProps {
  params: {
    projectId: string;
  };
}

const ProjectIdSettingPage = async ({ params }: ProjectIdSettingPageProps) => {
  const user = await getCurrent();
  if (!user) {
    redirect("sign-in");
  }

  const initialValue = await getProject({
    projectId: params.projectId,
  });
  return (
    <div className="w-full lg:max-w-xl">
      <EditProjectForm initialValues={initialValue} />
    </div>
  );
};

export default ProjectIdSettingPage;
