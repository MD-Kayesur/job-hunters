import { data, useNavigate, useParams } from "react-router-dom";
import UseAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
function JobApply() {
  const id = useParams();
  const { user } = UseAuth();
  console.log(id, user);
const navigate =useNavigate()
  const handlerapply = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkdin = form.linkdn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    // const allUrl = { linkdin, github, resume };
    // console.log(allUrl);

    const jobApplication = {
      job_id: id,
      linkdin,
      github,
      resume,
    };

    fetch("http://localhost:4000/job-application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
           
            Swal.fire({
              title: "Drag me!",
              icon: "success",
              draggable: true,
            });

            navigate('/myapplication')
          };
       
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center m-3">
            Apply job good luvk!
          </h1>
          <div className="card-body">
            <form onSubmit={handlerapply} action="">
              <fieldset className="fieldset">
                <label className="fieldset-label">Linkdin URL</label>
                <input
                  type="url"
                  name="linkdn"
                  className="input"
                  placeholder="linkdinurl"
                />
                <label className="fieldset-label">GitHUB URL</label>
                <input
                  type="url"
                  name="github"
                  className="input"
                  placeholder="github url"
                />
                <label className="fieldset-label"> REsume URL</label>
                <input
                  type="url"
                  name="resume"
                  className="input"
                  placeholder="Resume URL"
                />

                <button className="btn btn-neutral mt-4">Apply</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobApply;
