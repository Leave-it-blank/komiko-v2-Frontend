export type HOMEPAGE_APITYPE = {
  latest: Array<{
    comic_id: number;
    ch_number: number;
    vol_number: number;
    ch_name: string;
    comic_title: string;
    comic_viewUrl: string;
    ch_viewUrl: string;
    comic_titleslug: string;
    comic_isMature: boolean;
    comic_isLocked: boolean;
    comic_createdAt: string;
    comic_updatedAt: string;
    comic_type: string;
    comic_choice: string;
    comic_thumb: string;
  }>;
  recommended: Array<{
    comic_id: number;
    comic_title: string;
    comic_viewUrl: string;
    comic_titleslug: string;
    comic_isMature: boolean;
    comic_isLocked: boolean;
    comic_createdAt: string;
    comic_updatedAt: string;
    comic_type: string;
    comic_choice: string;
    comic_thumb: string;
    ch_count: number;
  }>;
  slider: Array<{
    img: string;
    position: number;
    url: string;
  }>;
  ads: Array<{
    above_rec: string;
    below_rec: string;
  }>;
};

export type LATEST_APITYPE = {
  chapters: {
    current_page: number;
    data: Array<{
      ch_id: number;
      ch_number: number;
      ch_created_at: string;
      vol_id: number;
      vol_number: number;
      vol_created_at: string;
      comic_id: number;
      comic_title: string;
      comic_titleSlug: string;
      comic_choice: string;
      comic_type: string;
      comic_isMature: boolean;
      comic_status: string;
      comic_thumb: string;
    }>;

    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Array<{
      url: string;
      label: string;
      active: boolean;
    }>;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
  };
};

export type COMICS_APITYPE = {
  comics: {
    current_page: number;
    data: Array<{
      id: number;
      title: string;
      titleSlug: string;
      created_at: string;
      choice: string;
      chapterCount: number;
      type: string;
      isMature: false;
      status: string;
      thumb: string;
    }>;

    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Array<{
      url: string;
      label: string;
      active: boolean;
    }>;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
  };
};

export type COMIC_DETAILS_APITYPE = {
  comic: {
    id: number;
    title: string;
    viewUrl: string;
    description: string;
    created_at: string;
    updated_at: string;
    isMature: boolean;
    isLocked: boolean;
    author: string;
    artist: string;
    publisher: string;
    tags: Array<{
      svg: any;
      name: string;
      tagCode: string;
    }>;
    first_ch: {
      volumeNumber: number;
      chapterNumber: number;
      comicSlug: string;
    };
    thumb: string;

    volumes: {
      chapters: Array<{
        number: number;
        name: string;
        id: number;
        url: string;
      }>;
      number: number;
      id: number;
      name: string;
      chapters_exist: boolean;
    };

    titleSlug: string;
  };
  ads_comic: Array<{
    ads_above_comment: string;
    ads_below_desc: string;
    ads_inside_content: string;
    ads_below_content: string;
    ads_below_title: string;
  }>;
};

export type CHAPTER_APITYPE = {
  chapter: {
    pages: Array<{
      id: number;
      fileName: string;
      thumb: string;
    }>;
    ch_id: number;
    ch_name: string;
    ch_isLocked: boolean;
    ch_no: number;
    comic_titleSlug: string;
    comic_description: string;
    comic_title: string;
    comic_ID: number;
    vol_no: number;
    vol_ID: number;
    comic_thumb: string;
    nextCh: Array<{
      comic: string;
      volume: number;
      chapter: number;
    }>;
    prevCh: Array<{
      comic: string;
      volume: number;
      chapter: number;
    }>;
    ads_reader: {
      ads_reader_inside_content: string;
      ads_reader_below_content: string;
      ads_reader_above_content: string;
    };
    crawler_detected: boolean;
  };
};
