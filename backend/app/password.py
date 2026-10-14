from pwdlib import PasswordHash

hashpassword = PasswordHash.recommended()

def hash_password(password : str):
    return hashpassword.hash(password)

def verify_password(password : str,hashed_password:str):
    return hashpassword.verify(password,hashed_password)