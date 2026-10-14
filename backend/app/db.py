import psycopg
from app.config import SUPABASE_URL

def get_connection():
    connection = psycopg.connect(SUPABASE_URL)
    return connection