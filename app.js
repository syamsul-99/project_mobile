import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

// Komponen Kartu Profil (Sesuai Prompt Specification)
const ProfileCard = ({ nama, nim, prodi, foto, quotes }) => {
  return (
    <View style={styles.card}>
      {/* Foto Profil */}
      <Image 
        source={foto} 
        style={styles.fotoProfil} 
      />
      
      {/* Identitas Akademik */}
      <Text style={styles.nama}>{nama}</Text>
      <Text style={styles.nim}>NIM: {nim}</Text>
      <Text style={styles.prodi}>{prodi}</Text>
      
      {/* Garis Pemisah */}
      <View style={styles.garis} />
      
      {/* Quotes */}
      <Text style={styles.quotes}>"{quotes}"</Text>
    </View>
  );
};

export default function App() {
  return (
    // SafeAreaView mencegah konten terpotong oleh notch/status bar
    <SafeAreaView style={styles.container}>
      {/* ScrollView mencegah konten terpotong jika layar terlalu kecil */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <Text style={styles.judulHalaman}>Vibe Card Mahasiswa</Text>
        
        {/* Panggil Komponen dengan Data Diri Anda */}
        <ProfileCard 
          nama="Djody Prayogo P"
          nim="202410370110328"
          prodi="Informatika"
          foto={{ uri: 'https://picsum.photos/200' }} 
          quotes="Belajar hari ini, sukses esok hari. Integritas akademik adalah nomor satu!"
        />

      </ScrollView>
    </SafeAreaView>
  );
}

// Styling (Refactoring agar tidak terpotong)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  judulHalaman: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    maxWidth: 350,
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  fotoProfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  nama: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A1A1A',
    textAlign: 'center',
  },
  nim: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  prodi: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
    marginTop: 2,
  },
  garis: {
    width: '80%',
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 15,
  },
  quotes: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555',
    textAlign: 'center',
    lineHeight: 20,
  },
});