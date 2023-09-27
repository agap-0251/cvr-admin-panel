import MentorTable from "@/components/MentorTable";


const getMentorDetails = async () => {
  const data = await fetch('https://mentor-student-umum.onrender.com/mentors',{
    method : 'GET',
    next : {
      revalidate : 100
    }
  });
  return data.json();
}

const Mentors = async () => {

  const mentors = await getMentorDetails();
  // console.log(mentors)


  return (
    <div className="flex flex-col gap-3 overflow-hidden">
      <MentorTable mentors={mentors} />
    </div>
  )
}

export default Mentors