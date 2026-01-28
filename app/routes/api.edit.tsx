import {previewModeAction, previewModeLoader} from '@pack/hydrogen';
import type {ActionFunction, LoaderFunction} from '@remix-run/cloudflare';

export const action: ActionFunction = previewModeAction;
export const loader: LoaderFunction = previewModeLoader;
