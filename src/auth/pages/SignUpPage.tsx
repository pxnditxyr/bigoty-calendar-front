import { Link } from 'react-router-dom';

import { AuthLayout } from '../layout';
import { FormField } from '../../ui';

export const SignUpPage = () => {
  return (
    <AuthLayout title="Sign Up">
      <form>
        <FormField
          name="name"
          type="text"
          placeholder="Name"
        />
        <FormField
          name="birthday"
          type="date"
        />
        <FormField
          name="username"
          type="text"
          placeholder="Username"
        />
        <FormField
          name="email"
          type="email"
          placeholder="Email or Username"
        />
        <FormField
          name="password"
          type="password"
          placeholder="Password"
        />
        <FormField
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
        />
        <button> Sign Up </button>
      </form>
      <Link to="../signin"> Already have an account? Sign In </Link>
    </AuthLayout>
  );
};
