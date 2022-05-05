import { domain } from "./cogfix";
export default {
  register(data, id) {
    let token = JSON.parse(localStorage.getItem("token"));
    return fetch(`${domain}elearning/v4/course-register/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.accessToken}`,
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  },
  courses() {
    return fetch(`${domain}elearning/v4/courses`).then((res) => res.json());
  },
  detail(id) {
    return fetch(`${domain}elearning/v4/courses/${id}`).then((res) =>
      res.json()
    );
  },
  related(slug) {
    return fetch(`${domain}elearning/v4/course-related/${slug}`).then((res) =>
      res.json()
    );
  },
};
