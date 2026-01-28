import {redirect} from '@remix-run/cloudflare';
import type {ActionFunctionArgs} from '@remix-run/cloudflare';

export async function action({request}: ActionFunctionArgs) {
  let body;
  try {
    body = await request.formData();
  } catch (error) {}
  const to = String(body?.get('to') || '');
  const status = Number(body?.get('status'));
  const headersString = String(body?.get('headers') || '');
  let headers;
  try {
    headers = JSON.parse(headersString);
  } catch (error) {}

  if (!to)
    return Response.json({errors: ['Missing `to` in body']}, {status: 400});

  return status ? redirect(to, {status, headers}) : redirect(to, {headers});
}
