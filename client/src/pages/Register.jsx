import { Link, Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful!");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        {/* dsad */}
        <FormRow type="text" name="name" defaultValue="Sahil" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="Khanolkar"
        />
        <FormRow type="text" name="location" defaultValue="Earth" />
        <FormRow type="email" name="email" defaultValue="kingLuffy@gmail.com" />
        <FormRow type="password" name="password" defaultValue="pass1234" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "submit"}
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
