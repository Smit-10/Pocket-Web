from pydantic import EmailStr
from app.db import get_connection
from app.password import hash_password,verify_password
from app.JWT_Token import create_access_token

def get_register_user(email:EmailStr,password:str):
    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        """
        SELECT * FROM users WHERE email = %s
        """,(email,)
    )

    existing_user = cursor.fetchone()

    if existing_user:
        cursor.close()
        connection.close()
        return None

    hashed_password = hash_password(password)

    cursor.execute(
        """
        INSERT INTO users(email,password) VALUES (%s,%s) RETURNING id,email
        """,(email,hashed_password) 
    )

    user = cursor.fetchone()
    connection.commit()
    cursor.close()
    connection.close()

    return user


def get_login_user(email:EmailStr,password:str):
    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        """
        SELECT id,email,password FROM users WHERE email = %s
        """,(email,)
    )

    existing_user = cursor.fetchone()
    cursor.close()
    connection.close()

    if not existing_user:
        return None

    if not existing_user[2]:
        return None

    valid_password = verify_password(password,existing_user[2])

    if not valid_password:
        return None

    access_token = create_access_token({
        "id":existing_user[0]
    })

    return {
        "access_token" : access_token,
        "token_type" : "bearer"
    }
    
