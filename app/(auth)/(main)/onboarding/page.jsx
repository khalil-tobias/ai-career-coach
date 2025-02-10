import OnboardingForm from "@/components/onboarding/OnboardingForm";
import { getUserOnboardingStatus } from "@/actions/user";
import { industries } from "@/components/ui/data/industries";

const OnboardingPage = async() => {
    //check if user is already onboarded
    const {isOnboarded} = await getUserOnboardingStatus();
    if(isOnboarded){
        redirect("/dashboard");
    }
  return (
    <main>
        <OnboardingForm industries = {industries}/>
    </main>
  )
}

export default OnboardingPage
