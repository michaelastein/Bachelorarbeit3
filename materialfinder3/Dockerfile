
# The first instruction is what image we want to base our container on
# We Use an official Python runtime as a parent image
FROM python:3.11

# Allows docker to cache installed dependencies between builds
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Mounts the application code to the image
COPY . /materialapp
COPY . /materialfinder3
WORKDIR /materialfinder3

EXPOSE 8080

# runs the production server
ENTRYPOINT ["python3", "manage.py"]
CMD ["runserver", "127.0.0.1:8080"]