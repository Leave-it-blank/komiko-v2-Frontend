import {
  HOMEPAGE_APITYPE,
  LATEST_APITYPE,
  COMICS_APITYPE,
  COMIC_DETAILS_APITYPE,
  CHAPTER_APITYPE,
} from "./types";
export async function getHomePage() {
  let url: string = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/homepage`;
  const res = await fetch(url);
  if (!res.ok) {
    const message = `An error occured: ${res.status} while fetching data from api`;
    console.error(message);
    throw new Error(message);
  }
  const response: HOMEPAGE_APITYPE = await res.json();
  return response;
}

export async function getLatestPage(query: any) {
  const page = query.page ? query.page : null;
  let url: string = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/latest`;

  if (page !== null && page !== undefined) {
    url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/latest/?page=${page}`;
  }
  const res = await fetch(url);
  if (!res.ok) {
    const message = `An error occured: ${res.status} while fetching data from api`;
    console.error(message);
    throw new Error(message);
  }
  const response: LATEST_APITYPE = await res.json();

  return response;
}

export async function getComicsPage(query: any) {
  const page = query.page ? query.page : null;
  let url: string = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/comics`;

  if (page !== null && page !== undefined) {
    url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/comics/?page=${page}`;
  }
  const res = await fetch(url);
  if (!res.ok) {
    const message = `An error occured: ${res.status} while fetching data from api`;
    console.error(message);
    throw new Error(message);
  }
  const response: COMICS_APITYPE = await res.json();

  return response;
}

export async function getComicDetails(params: { comic_slug: string }) {
  const { comic_slug } = params;

  let url: string = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/comics/${comic_slug}`;

  const res = await fetch(url);
  if (!res.ok) {
    const message = `An error occured: ${res.status} while fetching data from api`;
    console.error(message);
    throw new Error(message);
  }
  const response: COMIC_DETAILS_APITYPE = await res.json();

  return response;
}

export async function getChapter(params: {
  comic_slug: string;
  volume_id: string;
  chapter_id: string;
}) {
  const { comic_slug, volume_id, chapter_id } = params;

  let url: string = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/comics/${comic_slug}/volume/${volume_id}/chapter/${chapter_id}`;

  const res = await fetch(url);
  if (!res.ok) {
    const message = `An error occured: ${res.status} while fetching data from api`;
    console.error(message);
    throw new Error(message);
  }
  const response: CHAPTER_APITYPE = await res.json();

  return response;
}
