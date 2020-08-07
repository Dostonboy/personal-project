from django.core.files.storage import FileSystemStorage
from .forms import EmailForm
from django.core.mail import send_mail
from django.core.mail import EmailMessage
from django.shortcuts import render
from django.urls import reverse_lazy
from django.utils import timezone
from django.conf import settings
from django.views.generic import (TemplateView,ListView,DetailView,CreateView,UpdateView,DeleteView)


class AboutView(TemplateView):
    template_name='mc_app/about.html'

def email(request):
    if request.method == "POST":
        form = EmailForm(request.POST,request.FILES)
        if form.is_valid():
            post = form.save(commit=False)
            post.published_date = timezone.now()
            post.save()
            email = request.POST.get('email')
            subject = request.POST.get('subject')
            message = request.POST.get('message')
            doc = (request.FILES.get('document'))
            document=(str(doc))
            email_from = settings.EMAIL_HOST_USER
            recipient_list = [email]
            email = EmailMessage(subject,message,email_from,recipient_list)
            base_dir = 'media/documents/'
            email.attach_file('media/documents/'+str(document))
            email.send()
    else:
        form = EmailForm()
    return render(request,'mc_app/email_form.html', {'form': form})

def index(request):

    return render(request,'mc_app/base.html')
