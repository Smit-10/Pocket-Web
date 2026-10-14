from fastapi import FastAPI
from app import auth

app = FastAPI(title="Pocket AI")

app.include_router(auth.router)


@app.get("/")
def active():
    return {"message" : "to active the session"}