using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System;
using System.Windows.Media.Imaging;

namespace desktop
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }


        private void btnSprawdzCene_Click(object sender, RoutedEventArgs e)
        {
            if(opcjaPocztowka.IsChecked == true)
            {
                txtcena.Text = "Cena: 1 zł";
                zdjecie.Source = new BitmapImage(
                    new Uri("pack://application:,,,/egz-images/pocztowka.jpg")
                );
                return;
            }
            if (opcjaList.IsChecked == true)
            {
                txtcena.Text = "Cena: 1.50 zł";
                zdjecie.Source = new BitmapImage(
                    new Uri("pack://application:,,,/egz-images/list.jpg")
                );
                return;
            }
            if (opcjaPaczka.IsChecked == true)
            {
                txtcena.Text = "Cena: 10 zł";
                zdjecie.Source = new BitmapImage(
                    new Uri("pack://application:,,,/egz-images/paczka.jpg")
                );
                return;
            }
        }

        private void btnZatwierdz_Click(object sender, RoutedEventArgs e)
        {
            string tekst = txbKod.Text;

            if (System.Text.RegularExpressions.Regex.IsMatch(tekst, @"^\d{5}$"))
            {
                MessageBox.Show("Dane przesyłki zostały wprowadzone poprawnie");
                return;
            }
            if(tekst.Length < 5  || tekst.Length>5)
            {
                MessageBox.Show("Nieprawidłowa liczba cyfr w kodzie pocztowym");
                return;
            }
            if(!int.TryParse(tekst.Replace(" ", ""), out int tekst1))
            {
                MessageBox.Show("Kod pocztowy powinien się składać z samych cyfr");
            }


        }
    }
}