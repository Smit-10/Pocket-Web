from fastapi import APIRouter,HTTPException,status
from app.auth_schemas import login_user,register_user
from app.auth_services import get_register_user,get_login_user

router = APIRouter(
    prefix="/auth",
    tags=["authentication"]
)

@router.post("/register_user")
def register_user(register:register_user):
    result = get_register_user(email=register.email,password=register.password)

    if result is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="Email already registered")

    return {
        "message": "User registered successfully",
        "user":{
            "User_id":result[0],
            "email":result[1]
        }
    }



@router.post("/login_user")
def login_user(login : login_user):
    result = get_login_user(email=login.email,password=login.password)

    if result is None:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Invalid email or password")
    
    return {
        "message": "Login Successfull",
        "token":result['access_token']
    }

