import {redirect} from '@remix-run/cloudflare';
import type {LoaderFunctionArgs} from '@remix-run/cloudflare';

export async function loader({context, params}: LoaderFunctionArgs) {
  context.customerAccount.handleAuthStatus();
  const locale = params.locale;
  return redirect(locale ? `/${locale}/account` : '/account');
}
