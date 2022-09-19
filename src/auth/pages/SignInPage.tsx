import { Link } from 'react-router-dom';

import { AuthLayout } from '../layout';
import { FormField } from '../../ui';

export const SignInPage = () => {
  return (
    <AuthLayout title="Sign In">
      <form>
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
        <button> Sign In </button>
      </form>
      <button> Sign In with Google </button>
      <Link to="../signup"> Already have an account? Sign Up </Link>
    </AuthLayout>
  );
};
