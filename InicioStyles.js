import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'black',
    paddingHorizontal: 16,
  },
  title: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  categoryDropdown: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  searchButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginLeft: 5,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  projectCard: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    marginVertical: 10,
  },
  projectImage: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  projectCareer: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  projectGroup: {
    color: 'purple',
    fontSize: 14,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  projectButton: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
  },
  projectButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
