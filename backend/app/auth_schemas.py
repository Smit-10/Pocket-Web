from pydantic import BaseModel,EmailStr

class login_user(BaseModel):
    email : EmailStr
    password : str

class register_user(BaseModel):
    email : EmailStr
    password : str
