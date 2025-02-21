from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
api_router = APIRouter(prefix="/api")

# Allow all origins during development (adjust for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@api_router.get("/")
async def read_root():
    return {"message": "Hello from FastAPI! slash"}

# Add another route to handle /api (without trailing slash)
@api_router.get("", include_in_schema=False)
async def read_root_no_slash():
    return {"message": "Hello from FastAPI! blank"}

@api_router.get("/blog")
async def read_blog():
    return {"message": "Welcome to the blog!"}

@api_router.get("/blog/{id}")
async def read_blog_id(id: int):
    return {"message": f"this would be blog post {id}!"}

@api_router.get("/video")
async def read_video():
    return {"message": "Here's all the videos!"}

@api_router.get("/video/{id}")
async def read_video_id(id: int):
    return {"message": f"this would be video {id}!"}

app.include_router(api_router)
