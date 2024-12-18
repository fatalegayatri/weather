// app/routes/_auth.login.tsx
import {
  Form,
  useActionData,

} from "@remix-run/react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Box
} from "@mui/material";
import { authenticator } from "../services/_auth.server";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  await authenticator.authenticate(request, {
    successRedirect: "/dashboard"
  });
  return null;
}

export async function action({ request }: ActionFunctionArgs) {
  try {
    return await authenticator.authenticate("user-pass", request, {
      successRedirect: "/dashboard",
      failureRedirect: "/login"
    });
  } catch (error) {
    return { error: error.message };
  }
}

export default function LoginPage() {
  const actionData = useActionData<typeof action>();

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Form method="post">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
          />
          {actionData?.error && (
            <Typography color="error">{actionData.error}</Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Sign In
          </Button>
        </Form>
      </Box>
    </Container>
  );
}