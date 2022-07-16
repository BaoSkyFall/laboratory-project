export class UpdateUserPassword {
    public oldPassword: string;
    public newPassword: string;
}

export class UploadAvatarUserReq {
    constructor(
        public fileContent?: File,
        public type?: string,
        public code?: string,
    ) { }
}