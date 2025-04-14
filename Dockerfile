# Python 3.11 기반 이미지 사용
FROM python:3.11

# 작업 디렉토리 설정
WORKDIR /app

# 프로젝트 모든 파일 복사
COPY . .

# 패키지 설치
RUN pip install --no-cache-dir -r requirements.txt

# Fly.io가 접근할 포트
EXPOSE 8080

# FastAPI 앱 실행 (main.py 안에 app = FastAPI() 있어야 함)
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
