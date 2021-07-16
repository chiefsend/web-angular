export interface Share {
  id: string; // UUID
  created_at: string; // DateTime
  name: string;
  expires: string; //DateTime
  download_limit: number;
  is_public: boolean;
  password: string;
  emails: string[];
  is_temporary: boolean;

  attachments: Attachment[];
}

export interface Attachment {
  id: string; // UUID
  filename: string;
  filesize: number;
}
