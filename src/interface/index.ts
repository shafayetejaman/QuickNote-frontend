// --- Auth / API ---
export interface IUser {
    username: string
}

export interface IToken {
    accessToken: string
    refreshToken: string
}

export interface ILoginPayload {
    username: string
    password: string
}

export interface ILoginResponseData {
    user: IUser
    accessToken: string
    refreshToken: string
}

export interface IRegisterResponseData {
    user: IUser
}

export interface IRefreshTokenResponse {
    newAccessToken: string
    newRefreshToken: string
}

// --- Context ---
export interface IAuthContextValue {
    user: IUser | null
    token: IToken | null
    login: (data: ILoginResponseData) => void
    logout: () => void
    register: (data: IRegisterResponseData) => void
}

// --- Component Props ---
export interface IButtonProps {
    className?: string
    loading?: boolean
    text?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
}

export interface ICardProps {
    children: React.ReactNode
    className?: string
}

export interface IInputFieldProps {
    id: string
    label: string
    type?: string
    ref?: React.Ref<HTMLInputElement>
    value?: string
    onChange?: (value: string) => void
    name?: string
    placeholder?: string
    required?: boolean
    accept?: string
    className?: string
}

export interface INotificationData {
    error?: boolean
    header?: string
    body?: string
}

export interface INotificationModalProps {
    onClick: () => void
    data?: INotificationData
}

export interface IProgressBarProps {
    iniProgress?: number
}

export interface IRouteProps {
    children: React.ReactNode
}

// --- Misc ---
export interface IPasswordValidationError {
    error: boolean
    message?: string[]
}
