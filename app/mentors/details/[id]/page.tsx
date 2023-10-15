import MentorForm from "@/components/MentorForm"
import { MENTORTYPE,MENTORPARAMS } from "@/lib/types";

const getSpecificMentorDetails = async (id : MENTORTYPE["mailid"]) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_DATA_URL}/mentors/${id}`,{
    method : 'GET',
    next : {
      revalidate : 100
    }
  });
  return data.json();
}


const MentorDetails = async ({params} : {params : MENTORPARAMS}) => {

  const details = await getSpecificMentorDetails(params.id)
  // console.log(details)

  return (
    <div>
      MentorDetails - {params.id}
    <MentorForm isDisabled = {true} preloadValues = {details} />
    </div>
  )
}

export default MentorDetails