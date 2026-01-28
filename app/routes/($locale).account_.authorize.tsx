import {redirect} from '@remix-run/cloudflare';
import type {LoaderFunctionArgs} from '@remix-run/cloudflare';

import {FROM_ACCOUNT_AUTHORIZATION_KEY} from '~/lib/constants';

export async function loader({context, params}: LoaderFunctionArgs) {
  await context.customerAccount.authorize();
  const locale = params.locale;
  return redirect(
    locale
      ? `/${locale}/account?${FROM_ACCOUNT_AUTHORIZATION_KEY}=1`
      : `/account?${FROM_ACCOUNT_AUTHORIZATION_KEY}=1`,
  );
}
